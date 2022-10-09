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
