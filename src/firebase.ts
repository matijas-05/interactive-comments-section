import { FirebaseError, initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	Unsubscribe,
	updateProfile,
	UserCredential
} from "firebase/auth";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	DocumentData,
	DocumentReference,
	getFirestore,
	onSnapshot,
	orderBy,
	query,
	QuerySnapshot,
	Timestamp,
	updateDoc
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Initialize firebase
const firebaseConfig = {
	apiKey: "AIzaSyBIGSitMwae90gp8mJRPuZyZ0jVEVlF8x0",
	authDomain: "interactive-comments-sec-7758b.firebaseapp.com",
	projectId: "interactive-comments-sec-7758b",
	storageBucket: "interactive-comments-sec-7758b.appspot.com",
	messagingSenderId: "723039941161",
	appId: "1:723039941161:web:0a655affc64287f664a238",
	measurementId: "G-1SK65D4MJC"
};
const app = initializeApp(firebaseConfig);

// Storage
const storage = getStorage(app);

// Auth
const auth = getAuth(app);

export interface UserData {
	uid: string;
	userName: string;
	profilePictureDownloadURL: string;
}
let currentUser: UserData | null = null;
const CURRENT_USER_STORAGE = "currentUser";
export const getCurrentUser = () => {
	if (currentUser) return currentUser;

	const currentUserJSON = localStorage.getItem(CURRENT_USER_STORAGE) ?? sessionStorage.getItem(CURRENT_USER_STORAGE);
	if (currentUserJSON) {
		currentUser = JSON.parse(currentUserJSON);
		return currentUser;
	} else return null;
};

export async function signUpUser(
	email: string,
	userName: string,
	profilePicture: File | null,
	password: string,
	onSuccess: (user: UserCredential) => void,
	onError: (error: FirebaseError) => void
) {
	try {
		const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

		// Upload profile picture if set, otherwise use default
		const profilePicturePath = profilePicture
			? `user_data/${userCredentials.user.uid}/profile_picture.${profilePicture.name.split(".")[1]}`
			: "no_pp.png";
		const profilePictureRef = ref(storage, profilePicturePath);
		if (profilePicture) await uploadBytes(profilePictureRef, profilePicture);

		try {
			await updateProfile(userCredentials.user, { displayName: userName, photoURL: profilePictureRef.fullPath });
			onSuccess(userCredentials);
		} catch (error) {
			onError(error as FirebaseError);
		}
	} catch (error) {
		onError(error as FirebaseError);
	}
}
export async function signInUser(
	email: string,
	password: string,
	rememberMe: boolean,
	onSuccess: (user: UserCredential) => void,
	onError: (error: FirebaseError) => void
) {
	try {
		const userCredentials = await signInWithEmailAndPassword(auth, email, password);
		onSuccess(userCredentials);

		const profilePictureRef = ref(storage, userCredentials.user.photoURL!);
		const profilePictureDownloadURL = await getDownloadURL(profilePictureRef);

		currentUser = {
			uid: userCredentials.user.uid,
			userName: userCredentials.user.displayName!,
			profilePictureDownloadURL: profilePictureDownloadURL
		};
		if (rememberMe) localStorage.setItem(CURRENT_USER_STORAGE, JSON.stringify(currentUser));
		else sessionStorage.setItem(CURRENT_USER_STORAGE, JSON.stringify(currentUser));
	} catch (error) {
		onError(error as FirebaseError);
	}
}
export async function signOut() {
	try {
		await auth.signOut();
		currentUser = null;
		localStorage.removeItem(CURRENT_USER_STORAGE);
		sessionStorage.removeItem(CURRENT_USER_STORAGE);
	} catch (error) {
		console.error("Error signing out:");
		throw error;
	}
}

// Database
const db = getFirestore(app);
export const commentsCol = collection(db, "comments");
export type CommentData = {
	/** When reading from firebase, id isn't automatically populated, we have to get it from document's id */
	id?: string;
	user: UserData;
	message: string;
	date: Timestamp;
	edited: boolean;
	upvotes: string[];
	downvotes: string[];
	replies: DocumentReference[];
};

export async function addComment(message: string, date: Timestamp) {
	try {
		return await addDoc(commentsCol, {
			user: getCurrentUser()!,
			message: message,
			date: date,
			edited: false,
			upvotes: [],
			downvotes: [],
			replies: []
		} as CommentData);
	} catch (error) {
		console.error("Error adding comment:");
		throw error;
	}
}
export async function addReply(parentCommentID: string, message: string, date: Timestamp) {
	try {
		const replyRef = await addComment(message, date);
		const parentCommentRef = doc(commentsCol, parentCommentID);

		const existingData = getComment(parentCommentID);
		if (!existingData) throw new Error("Parent comment doesn't exist!");
		existingData.replies.push(replyRef);

		updateDoc(parentCommentRef, existingData);
	} catch (error) {
		console.error("Error adding reply:");
		throw error;
	}
}

function getComment(id: string): CommentData | undefined {
	try {
		return onFirebaseUpdate?.detail.allComments.find(comment => comment.id === id);
	} catch (error) {
		console.error("Error getting comment:");
		throw error;
	}
}
function getAllCommentsFromQuery(snapshot: QuerySnapshot<DocumentData>) {
	try {
		const comments: CommentData[] = [];

		snapshot.forEach(doc => {
			const data = doc.data() as CommentData;
			comments.push({
				id: doc.id,
				user: data.user,
				message: data.message,
				date: data.date,
				edited: data.edited,
				upvotes: data.upvotes,
				downvotes: data.downvotes,
				replies: data.replies
			});
		});

		return comments;
	} catch (error) {
		console.error("Error getting all comments:");
		throw error;
	}
}
function getTopLevelCommentsFromQuery(snapshot: QuerySnapshot<DocumentData>) {
	try {
		const comments: CommentData[] = [];

		snapshot.forEach(doc => {
			const data = doc.data() as CommentData;

			comments.push({
				id: doc.id,
				user: data.user,
				message: data.message,
				date: data.date,
				edited: data.edited,
				upvotes: data.upvotes,
				downvotes: data.downvotes,
				replies: data.replies
			});
		});

		// Remove comments from list of top-level comments if they are replies
		const replyIDs: string[] = [];
		for (const comment of comments) {
			for (const reply of comment.replies) {
				replyIDs.push(reply.id);
			}
		}
		for (let i = comments.length - 1; i >= 0; i--) {
			if (replyIDs.includes(comments[i].id!)) {
				comments.splice(i, 1);
			}
		}

		return comments;
	} catch (error) {
		console.error("Error getting top-level comments:");
		throw error;
	}
}

export async function editComment(id: string, newMessage: string) {
	try {
		const commentRef = doc(commentsCol, id);
		await updateDoc(commentRef, { message: newMessage, edited: true } as CommentData);
	} catch (error) {
		console.error("Error editing comment:");
		throw error;
	}
}
export async function removeComment(id: string) {
	try {
		const commentDataToRemove = getComment(id);
		if (!commentDataToRemove) {
			throw new Error("Comment doesn't exist!");
		}

		// Delete all replies
		for (let i = commentDataToRemove.replies.length - 1; i >= 0; i--) {
			await removeComment(commentDataToRemove.replies[i].id);
		}

		// Remove references to deleted doc
		const allComments = onFirebaseUpdate!.detail.allComments;
		for (const comment of allComments) {
			for (let i = 0; i < comment.replies.length; i++) {
				const reply = comment.replies[i];

				if (reply.id === id) {
					comment.replies.splice(i, 1);
					const commentRef = doc(commentsCol, comment.id);
					await updateDoc(commentRef, { ...comment, replies: comment.replies } as CommentData);
				}
			}
		}

		// Delete doc containing comment
		const commentRef = doc(commentsCol, id);
		await deleteDoc(commentRef);
	} catch (error) {
		console.error("Error removing comment:");
		throw error;
	}
}

export function upvoteComment(commentID: string, userID: string) {
	try {
		const commentRef = doc(commentsCol, commentID);
		const existingData = getComment(commentID);

		if (!existingData) throw new Error("Comment doesn't exist!");

		// Remove upvote if user already upvoted
		if (existingData.upvotes.includes(userID)) {
			updateDoc(commentRef, {
				...existingData,
				upvotes: existingData.upvotes.filter(id => id !== userID)
			} as CommentData);
		} else {
			updateDoc(commentRef, {
				...existingData,
				upvotes: [...existingData.upvotes, userID],
				downvotes: existingData.downvotes.filter(id => id !== userID)
			} as CommentData);
		}
	} catch (error) {
		console.error("Error upvoting comment:");
		throw error;
	}
}
export function downvoteComment(commentID: string, userID: string) {
	try {
		const commentRef = doc(commentsCol, commentID);
		const existingData = getComment(commentID);

		if (!existingData) throw new Error("Comment doesn't exist!");

		// Remove downvote if user already downvoted
		if (existingData.downvotes.includes(userID)) {
			updateDoc(commentRef, {
				...existingData,
				downvotes: existingData.downvotes.filter(id => id !== userID)
			} as CommentData);
		} else {
			updateDoc(commentRef, {
				...existingData,
				downvotes: [...existingData.downvotes, userID],
				upvotes: existingData.upvotes.filter(id => id !== userID)
			} as CommentData);
		}
	} catch (error) {
		console.error("Error downvoting comment:");
		throw error;
	}
}

// Database refreshing
export interface OnFirebaseUpdateEventData {
	allComments: CommentData[];
	topLevelComments: CommentData[];
}

let unsub: Unsubscribe | null = null;
let onFirebaseUpdate: CustomEvent<OnFirebaseUpdateEventData> | null = null;
export const ON_FIREBASE_UPDATE_EVENT_NAME = "onFirebaseUpdate";

export function subscribeFirebase(callback?: (data: OnFirebaseUpdateEventData) => void) {
	unsub = onSnapshot(query(commentsCol, orderBy("date", "asc")), snapshot => {
		onFirebaseUpdate = new CustomEvent<OnFirebaseUpdateEventData>(ON_FIREBASE_UPDATE_EVENT_NAME, {
			detail: {
				allComments: getAllCommentsFromQuery(snapshot),
				topLevelComments: getTopLevelCommentsFromQuery(snapshot)
			}
		});

		window.dispatchEvent(onFirebaseUpdate);
		if (callback) {
			callback(onFirebaseUpdate.detail);
			callback = undefined;
		}
	});
}
export function unsubscribeFirebase() {
	if (unsub) {
		unsub();
		unsub = null;
	} else throw Error("App wasn't subscribed!");
}
