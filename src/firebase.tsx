import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL, StorageReference } from "firebase/storage";

// Initialize firebase
const firebaseConfig = {
	apiKey: "AIzaSyC1zzrWtHRNbDTe22J8MKBSCjtPzsOo6n8",
	authDomain: "comment-section-ceae1.firebaseapp.com",
	projectId: "comment-section-ceae1",
	storageBucket: "comment-section-ceae1.appspot.com",
	messagingSenderId: "609829708335",
	appId: "1:609829708335:web:e96579ab47ec726e05dcda",
	measurementId: "G-LB457NLWX3"
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
export async function signInUser(email: string, password: string, onSuccess: (user: UserCredential) => void, onError: (error: FirebaseError) => void) {
	try {
		const userCredentials = await signInWithEmailAndPassword(auth, email, password);
		onSuccess(userCredentials);

		const profilePictureRef = ref(storage, userCredentials.user.photoURL!);
		setCurrentUser(userCredentials.user.uid, userCredentials.user.displayName!, profilePictureRef);
	}
	catch (err: any) {
		onError(err);
	}
}

export interface User {
	uid: string,
	userName: string;
	profilePictureDownloadURL: string;
}
let currentUser: User | null = null;
async function setCurrentUser(uid: string, userName: string, profilePictureRef: StorageReference) {
	const profilePictureDownloadURL = await getDownloadURL(profilePictureRef);
	currentUser = { uid: uid, userName: userName, profilePictureDownloadURL: profilePictureDownloadURL };
	localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

export const getCurrentUser = () => {
	if (currentUser) return currentUser;

	const currentUserString = localStorage.getItem("currentUser");
	if (currentUserString) {
		currentUser = JSON.parse(currentUserString);
		return currentUser;
	}

	return null;
};
export const isLoggedIn = () => currentUser;