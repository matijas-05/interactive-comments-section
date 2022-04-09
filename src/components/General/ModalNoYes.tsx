import ReactModal from 'react-modal';
import ButtonPrimary from './ButtonPrimary';
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
			className={`${styles["ModalNoYes"]} f-col g-1 card`} bodyOpenClassName="ModalYesNo__Body"
			overlayClassName={`${styles["ModalNoYes__Overlay"]} f-center`} portalClassName="ModalYesNoPortal"
			contentLabel="Delete comment" ariaHideApp={false}
			closeTimeoutMS={200}
			isOpen={props.modalState} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true}
			onRequestClose={props.cancelModal}
			onAfterOpen={() => disableBodyScroll(document.querySelector("body")!)}
			onAfterClose={() => enableBodyScroll(document.querySelector("body")!)}
		>
			<h1>{props.header}</h1>
			<p>{props.message}</p>
			<div className="f-center g-1">
				<ButtonPrimary onClick={props.cancelModal}>NO, CANCEL</ButtonPrimary>
				<ButtonPrimary className="bg-red" onClick={props.confirmModal}>YES, DELETE</ButtonPrimary>
			</div>
		</ReactModal>
	)
}

export default ModalNoYes;