import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
		if (rememberMe) localStorage.setItem("currentUser", JSON.stringify(currentUser));
		else sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
	}
	catch (err: any) {
		onError(err);
	}
}
export async function signOutCurrentUser() {
	try {
		await auth.signOut();
		currentUser = null;
		localStorage.removeItem("currentUser");
		sessionStorage.removeItem("currentUser");
	}
	catch (err: any) {
		console.error(err);
	}
}

interface User {
	uid: string,
	userName: string;
	profilePictureDownloadURL: string;
}
let currentUser: User | null = null;
export const getCurrentUser = () => {
	if (currentUser) return currentUser;

	const currentUserString = localStorage.getItem("currentUser") ?? sessionStorage.getItem("currentUser");
	if (currentUserString) {
		currentUser = JSON.parse(currentUserString);
		return currentUser;
	}
	
	return null;
};