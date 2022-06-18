import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { DocumentReference, Timestamp, getFirestore, addDoc, getDocs, collection, query } from "firebase/firestore";

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

interface UserData {
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
export async function signOutCurrentUser() {
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
export interface CommentData {
	id?: string,
	user: UserData,
	message: string,
	date: Timestamp,
	edited: boolean,
	votes: number,
	replies: DocumentReference[] | null
}

export async function addComment(uid: string, message: string, date: Timestamp) {
	try {
		const docRef = await addDoc(commentsCol, {
			user: getCurrentUser()!,
			message: message,
			date: date,
			edited: false,
			votes: 0,
			replies: null
		} as CommentData);
		console.log(docRef.id);
	} catch (error) {
		console.error("Error adding comment", error);
	}
}
export async function getComments(): Promise<CommentData[] | null> {
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

		return comments;
	} catch (error) {
		console.error("Error getting comments", error);
		return null;
	}
}