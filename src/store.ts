import create from "zustand";

export interface SignInModalStore {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}
export const useSignInModalStore = create<SignInModalStore>(set => ({
	isOpen: false,
	setIsOpen: isOpen => set(() => ({ isOpen: isOpen }))
}));
