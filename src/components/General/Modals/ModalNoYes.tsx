import ReactModal from "react-modal";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styles from "./ModalNoYes.module.scss";

interface Props {
	header: string,
	message: string,
	modalState: boolean,
	confirmModal: () => void,
	cancelModal: () => void
}
function ModalNoYes(props: Props) {
	return (
		<ReactModal
			className={{
				base: `${styles["ModalNoYes__Content"]} f-col g-1 card`,
				afterOpen: styles["ModalNoYes__Content--after-open"],
				beforeClose: styles["ModalNoYes__Content--before-close"]
			}}
			bodyOpenClassName="ModalYesNo__Body"
			portalClassName="ModalYesNoPortal"
			overlayClassName={{
				base: `${styles["ModalNoYes__Overlay"]} f-center`,
				afterOpen: styles["ModalNoYes__Overlay--after-open"],
				beforeClose: styles["ModalNoYes__Overlay--before-close"]
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

export default ModalNoYes;