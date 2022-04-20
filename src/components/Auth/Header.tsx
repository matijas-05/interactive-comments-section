import { useEffect, useRef } from "react";
import MediaQuery from "react-responsive";
import ButtonSecondary from "@/components/General/Buttons/ButtonSecondary";
import styles from "./Header.module.scss";

import logInIcon from "@/assets/images/icon-log-in.svg";
import signUpIcon from "@/assets/images/icon-sign-up.svg";

interface Props {
	openLogInModal: () => void,
	openSignUpModal: () => void
}
function Header(props: Props) {
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
					iconSrc={logInIcon} alt="Log in" onClick={() => props.openLogInModal()}
				>
					<MediaQuery minWidth={btnTextBreakpoint}>Log in</MediaQuery>
				</ButtonSecondary>

				<MediaQuery minWidth={btnTextBreakpoint}><hr /></MediaQuery>

				<ButtonSecondary className="text-purple" iconClassName={`${styles["icon"]}`}
					iconSrc={signUpIcon} alt="Sign up" onClick={() => props.openSignUpModal()}
				>
					<MediaQuery minWidth={btnTextBreakpoint}>Sign up</MediaQuery>
				</ButtonSecondary>
			</nav>
		</header >
	);
}

export default Header;