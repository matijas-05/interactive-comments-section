import create from "zustand";
import { CommentData, getCurrentUser, UserData } from "@/firebase";

interface UserDataStore {
	currentUser: UserData | null,
	setCurrentUser: (user: UserData | null) => void
}
export const useUserStore = create<UserDataStore>(set => ({
	currentUser: getCurrentUser(),
	setCurrentUser: (user) => set(() => ({ currentUser: user }))
}) as UserDataStore);

interface CommentsStore {
	commentsData: CommentData[],
	setCommentsData: (data: CommentData[]) => void
}
export const useCommentsStore = create<CommentsStore>(set => ({
	commentsData: [],
	setCommentsData: (data) => set(() => ({ commentsData: data }))
}));