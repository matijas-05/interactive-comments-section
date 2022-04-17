import ButtonSecondary from "../General/ButtonSecondary";
import MediaQuery from "react-responsive";
import styles from "./Header.module.scss";

import logInIcon from "/src/assets/images/icon-log-in.svg";
import signUpIcon from "/src/assets/images/icon-sign-up.svg";
import { useEffect, useRef } from "react";

function Header() {
	const btnTextBreakpoint = 650;
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const setScrollMargin = () => {
			document.querySelectorAll<HTMLElement>(".comments > div > div").forEach(el => el.style.scrollMargin = `${headerRef.current!.offsetHeight + 10}px`);
		};

		setInterval(() => setScrollMargin(), 100);
	}, []);

	return (
		<header ref={headerRef} className={`${styles["header"]} left-right g-1`}>
			<h2 className={`${styles["header-text"]}`}>Interactive comments section</h2>
			<nav className={`${styles["navbar"]} f-row g-1`}>
				<MediaQuery maxWidth={btnTextBreakpoint - 1}><hr /></MediaQuery>

				<ButtonSecondary className="text-purple" iconClassName={`${styles["icon"]}`}
					iconSrc={logInIcon} alt="Login" onClick={() => console.log("login")}
				>
					<MediaQuery minWidth={btnTextBreakpoint}>Login</MediaQuery>
				</ButtonSecondary>

				<MediaQuery minWidth={btnTextBreakpoint}><hr /></MediaQuery>

				<ButtonSecondary className="text-purple" iconClassName={`${styles["icon"]}`}
					iconSrc={signUpIcon} alt="Sign up" onClick={() => console.log("sign up")}
				>
					<MediaQuery minWidth={btnTextBreakpoint}>Sign up</MediaQuery>
				</ButtonSecondary>
			</nav>
		</header >
	);
}

export default Header;