import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
const userDataRef = ref(storage, "user_data");

// Auth
const auth = getAuth(app);

export async function signUpUser(email: string, userName: string, profilePicture: File | null, password: string, onSuccess: (user: UserCredential) => void, onError: (error: FirebaseError) => void) {
	try {
		const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

		if (profilePicture) {
			// Also set profile picture
			const profilePictureRef = ref(userDataRef, `${userCredentials.user.uid}/profile_picture.${profilePicture.name.split(".")[1]}`);
			await uploadBytes(profilePictureRef, profilePicture);

			await updateProfile(userCredentials.user, { displayName: userName, photoURL: profilePictureRef.fullPath }).then(
				undefined,
				(err: FirebaseError) => {
					onError(err);
				});
		} else {
			await updateProfile(userCredentials.user, { displayName: userName }).then(
				undefined,
				(err: FirebaseError) => {
					onError(err);
				});
		}

		onSuccess(userCredentials);
	}
	catch (err: any) {
		onError(err);
	}
}
export async function signInUser(email: string, password: string, onSuccess: (user: UserCredential) => void, onError: (error: FirebaseError) => void) {
	try {
		const userCredentials = await signInWithEmailAndPassword(auth, email, password);
		onSuccess(userCredentials);
	}
	catch (err: any) {
		onError(err);
	}
}

export const getCurrentUser = () => auth.currentUser;
