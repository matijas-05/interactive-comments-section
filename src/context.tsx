import React from "react";

interface CurrentUserContext {
	currentUser: string,
	setCurrentUser: (user: string) => void
}
export const CurrentUser = React.createContext<CurrentUserContext>({
	currentUser: "",
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setCurrentUser: () => { }
});