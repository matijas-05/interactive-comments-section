import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

export async function signUpUser(email: string, userName: string, profilePicture: File | null, password: string,
	onSuccess: () => void, onError: (error: FirebaseError) => void) {
	try {
		const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

		// Also set profile picture
		if (profilePicture) {
			const profilePictureRef = ref(userDataRef, userCredentials.user.uid + "/profile_picture.png");
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

		onSuccess();
	}
	catch (err: any) {
		onError(err);
	}
}
export const getCurrentUser = () => auth.currentUser;
