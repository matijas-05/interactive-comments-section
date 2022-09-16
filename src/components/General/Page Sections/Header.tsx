import { useRef } from "react";
import MediaQuery from "react-responsive";
import { faArrowRightToBracket, faArrowRightFromBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useUserStore } from "@/store";
import ButtonSecondary from "@/components/General/Buttons/ButtonSecondary";
import styles from "./Header.module.scss";

interface Props {
	openSignInModal: () => void,
	openSignUpModal: () => void,
	openSignOutModal: () => void,
}
function Header(props: Props) {
	const btnTextBreakpoint = 650;
	const headerRef = useRef<HTMLDivElement>(null);

	const store = useUserStore();

	return (
		<header ref={headerRef} className={`${styles["header"]} left-right g-1`}>
			<h2 className={`${styles["header-text"]}`}>Interactive comments section</h2>
			<nav className={`${styles["navbar"]} f-row g-1`}>
				<MediaQuery maxWidth={btnTextBreakpoint - 1}><hr className="vertical-separator" /></MediaQuery>

				{
					store.currentUser ?
						<ButtonSecondary
							className="text-purple" iconClassName={`${styles["icon"]} fa-lg`}
							faIcon={faArrowRightFromBracket}
							alt="Sign in" onClick={props.openSignOutModal}
						>
							<MediaQuery minWidth={btnTextBreakpoint}>Sign out</MediaQuery>
						</ButtonSecondary>
						:
						<ButtonSecondary
							className="text-purple" iconClassName={`${styles["icon"]} fa-lg`}
							faIcon={faArrowRightToBracket}
							alt="Sign in" onClick={props.openSignInModal}
						>
							<MediaQuery minWidth={btnTextBreakpoint}>Sign in</MediaQuery>
						</ButtonSecondary>
				}


				{
					!store.currentUser &&
					<>
						<MediaQuery minWidth={btnTextBreakpoint}><hr className="vertical-separator" /></MediaQuery>
						<ButtonSecondary
							className="text-purple" iconClassName={`${styles["icon"]} fa-lg`}
							faIcon={faUserPlus}
							alt="Sign up" onClick={props.openSignUpModal}
						>
							<MediaQuery minWidth={btnTextBreakpoint}>Sign up</MediaQuery>
						</ButtonSecondary>
					</>
				}
			</nav>
		</header >
	);
}

export default Header;