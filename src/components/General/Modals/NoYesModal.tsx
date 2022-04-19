import ReactModal from "react-modal";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styles from "./NoYesModal.module.scss";

interface Props {
	header: string,
	message: string,
	modalState: boolean,
	confirmModal: () => void,
	cancelModal: () => void
}
function NoYesModal(props: Props) {
	return (
		<ReactModal
			className={{
				base: `${styles["NoYesModal__Content"]} f-col g-1 card`,
				afterOpen: styles["NoYesModal__Content--after-open"],
				beforeClose: styles["NoYesModal__Content--before-close"]
			}}
			bodyOpenClassName="NoYesModal__Body"
			portalClassName="NoYesModalPortal"
			overlayClassName={{
				base: `${styles["NoYesModal__Overlay"]} f-center`,
				afterOpen: styles["NoYesModal__Overlay--after-open"],
				beforeClose: styles["NoYesModal__Overlay--before-close"]
			}}

			contentLabel="Delete comment" ariaHideApp={false}
			isOpen={props.modalState} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true}
			closeTimeoutMS={200} onRequestClose={props.cancelModal}
			onAfterOpen={() => disableBodyScroll(document.querySelector("body")!)}
			onAfterClose={() => enableBodyScroll(document.querySelector("body")!)}
		>
			<h1>{props.header}</h1>
			<p>{props.message}</p>
			<div className="f-center g-1">
				<ButtonPrimary className="f-1" onClick={props.cancelModal}>NO, CANCEL</ButtonPrimary>
				<ButtonPrimary className="f-1 bg-red" onClick={props.confirmModal}>YES, DELETE</ButtonPrimary>
			</div>
		</ReactModal>
	);
}

export default NoYesModal;