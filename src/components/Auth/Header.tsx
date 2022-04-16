import ButtonSecondary from "../General/ButtonSecondary";
import MediaQuery from "react-responsive";
import styles from "./Header.module.scss";

import logInIcon from "../../assets/images/icon-log-in.svg";
import signUpIcon from "../../assets/images/icon-sign-up.svg";

function Header() {
	const btnTextBreakpoint = 650;

	return (
		<header className={`${styles["header"]} left-right g-1 card`}>
			<h2 className={`${styles["header-text"]}`}>Interactive comments section</h2>
			<nav className={`${styles["navbar"]} f-row g-1`}>
				<hr />
				<ButtonSecondary className="text-purple hover-opacity" iconSrc={logInIcon} noHoverEffect={true} onClick={() => console.log("login")}>
					<MediaQuery minWidth={btnTextBreakpoint}>Login</MediaQuery>
				</ButtonSecondary>
				<ButtonSecondary className="text-purple hover-opacity" iconSrc={signUpIcon} noHoverEffect={true} onClick={() => console.log("register")}>
					<MediaQuery minWidth={btnTextBreakpoint}>Register</MediaQuery>
				</ButtonSecondary>
			</nav>
		</header >
	);
}

export default Header;