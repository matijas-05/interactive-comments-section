import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { DocumentReference, Timestamp, getFirestore, addDoc, getDocs, collection, query, doc, updateDoc, getDoc } from "firebase/firestore";

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
	uid: string,
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
	}

	return null;
};

export async function signUpUser(email: string, userName: string, profilePicture: File | null, password: string, onSuccess: (user: UserCredential) => void, onError: (error: FirebaseError) => void) {
	try {
		const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

		// Upload profile picture if set, otherwise use default
		const profilePicturePath = profilePicture ? `user_data/${userCredentials.user.uid}/profile_picture.${profilePicture.name.split(".")[1]}` : "no_pp.png";
		const profilePictureRef = ref(storage, profilePicturePath);
		if (profilePicture) await uploadBytes(profilePictureRef, profilePicture);

		try {
			await updateProfile(userCredentials.user, { displayName: userName, photoURL: profilePictureRef.fullPath });
			onSuccess(userCredentials);
		}
		catch (err: any) {
			onError(err);
		}
	}
	catch (err: any) {
		onError(err);
	}
}
export async function signInUser(email: string, password: string, rememberMe: boolean, onSuccess: (user: UserCredential) => void, onError: (error: FirebaseError) => void) {
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
	}
	catch (err: any) {
		onError(err);
	}
}
export async function signOut() {
	try {
		await auth.signOut();
		currentUser = null;
		localStorage.removeItem(CURRENT_USER_STORAGE);
		sessionStorage.removeItem(CURRENT_USER_STORAGE);
	}
	catch (err: any) {
		console.error(err);
	}
}

// Database
const db = getFirestore(app);
const commentsCol = collection(db, "comments");
export type CommentData = {
	id?: string,	// When reading from firebase, id isn't automatically populated, we have to get it from document's id
	user: UserData,
	message: string,
	date: Timestamp,
	edited: boolean,
	votes: number,
	replies: DocumentReference[]
}

export async function addComment(message: string, date: Timestamp) {
	try {
		const docRef = await addDoc(commentsCol, {
			user: getCurrentUser()!,
			message: message,
			date: date,
			edited: false,
			votes: 0,
			replies: []
		} as CommentData);

		console.log(docRef.id);
		return docRef;
	} catch (error) {
		console.error("Error adding comment", error);
		return null;
	}
}
export async function addReply(parentCommentID: string, message: string, date: Timestamp) {
	try {
		const replyRef = await addComment(message, date);
		const parentCommentRef = doc(commentsCol, parentCommentID);

		const existingData = await getComment(parentCommentID);
		existingData!.replies.push(replyRef!);

		await updateDoc(parentCommentRef, existingData);
	} catch (error) {
		console.error("Error adding reply", error);
	}
}

export async function getComment(id: string) {
	try {
		const commentRef = doc(commentsCol, id);
		const commentData = (await getDoc(commentRef)).data() as CommentData;
		return commentData;
	} catch (error) {
		console.error("Error getting comment", error);
		return null;
	}
}
export async function getComments() {
	try {
		const snapshot = await getDocs(query(commentsCol));
		const comments: CommentData[] = [];

		snapshot.forEach(doc => {
			const data = doc.data() as CommentData;
			comments.push({
				id: doc.id,
				user: data.user,
				message: data.message,
				date: data.date,
				edited: data.edited,
				votes: data.votes,
				replies: data.replies
			});
		});

		// Remove comments from list of top-level comments if they are replies
		const replyIDs: string[] = [];
		comments.forEach(comment => {
			comment.replies.forEach(reply => replyIDs.push(reply.id));
		});
		for (let i = comments.length - 1; i >= 0; i--) {
			if (replyIDs.includes(comments[i].id!)) {
				comments.splice(comments.indexOf(comments[i]), 1);
			}
		}

		return comments;
	} catch (error) {
		console.error("Error getting comments", error);
		return null;
	}
}
