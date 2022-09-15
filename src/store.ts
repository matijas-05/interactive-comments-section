import create from "zustand";
import { UserData } from "@/firebase";

interface Store {
	currentUser: UserData | null,
	setCurrentUser: (user: UserData | null) => void
}
export const useStore = create<Store>(set => ({
	currentUser: null,
	setCurrentUser: (user) => set(() => ({ currentUser: user }))
}) as Store);