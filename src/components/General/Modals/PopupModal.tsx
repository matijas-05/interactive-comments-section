import ReactModal from "react-modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styles from "./PopupModal.module.scss";

interface Props extends ReactModal.Props {
	onRequestClose?: () => void;
}
function PopupModal(props: Props) {
	return (
		<ReactModal
			bodyOpenClassName="PopupModal__Body"
			portalClassName="PopupModalPortal"
			shouldCloseOnEsc={true}
			shouldCloseOnOverlayClick={true}
			closeTimeoutMS={200}
			onRequestClose={props.onRequestClose}
			onAfterOpen={() => disableBodyScroll(document.querySelector("body")!)}
			onAfterClose={() => enableBodyScroll(document.querySelector("body")!)}
			ariaHideApp={false}
			{...props}
			className={{
				base: `${styles["PopupModal__Content"]} ${props.className}`,
				afterOpen: styles["PopupModal__Content--after-open"],
				beforeClose: styles["PopupModal__Content--before-close"]
			}}
			overlayClassName={{
				base: `${styles["PopupModal__Overlay"]} f-center`,
				afterOpen: styles["PopupModal__Overlay--after-open"],
				beforeClose: styles["PopupModal__Overlay--before-close"]
			}}
		>
			{props.children}
		</ReactModal>
	);
}

export default PopupModal;
