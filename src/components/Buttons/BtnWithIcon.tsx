import styles from "./BtnWithIcon.module.scss"

interface BtnWithIconProps {
	imgSrc?: string,
	alt?: string,
	text?: string,
	onClick?: () => void,
}
function BtnWithIcon(props: BtnWithIconProps) {
	return (
		<div className={styles["btn-with-icon"]} onClick={props.onClick}>
			<img src={props.imgSrc} alt={props.alt} />
			<p className="accent-purple">{props.text}</p>
		</div>
	);
}

export default BtnWithIcon;