import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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
const auth = getAuth(app);

export async function signUpUser(email: string, userName: string, password: string, onSuccess: () => void, onError: (error: FirebaseError) => void) {
	try {
		const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

		// Also set the username
		updateProfile(userCredentials.user, { displayName: userName }).then(
			undefined,
			(err: FirebaseError) => {
				onError(err);
			});
		onSuccess();
	}
	catch (err: any) {
		onError(err);
	}
}