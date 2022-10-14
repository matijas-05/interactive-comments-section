import create from "zustand";
import { CommentData } from "@/firebase";

export interface CommentsStore {
	commentsData: CommentData[];
	setCommentsData: (data: CommentData[]) => void;
}
export const useCommentsStore = create<CommentsStore>(set => ({
	commentsData: [],
	setCommentsData: data => set(() => ({ commentsData: data }))
}));

export interface SignInModalStore {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}
export const useSignInModalStore = create<SignInModalStore>(set => ({
	isOpen: false,
	setIsOpen: isOpen => set(() => ({ isOpen: isOpen }))
}));
