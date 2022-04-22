import { useEffect, useState } from "react";

export function useValidateEmail(email: string): boolean {
	const [isValid, setIsValid] = useState(false);
	
	useEffect(() => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		setIsValid(regex.test(email));
	}, [email]);

	return isValid;
}