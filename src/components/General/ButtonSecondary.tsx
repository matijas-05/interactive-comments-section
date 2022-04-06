import styles from "./ButtonSecondary.module.scss"

interface Props {
	iconSrc?: string,
	alt?: string,
	text?: string,
	onClick?: () => void,
}
function ButtonSecondary(props: Props) {
	return (
		<div className={styles["btn-secondary"]} onClick={props.onClick}>
			<img src={props.iconSrc} alt={props.alt} />
			<p className="accent-purple">{props.text}</p>
		</div>
	);
}

export default ButtonSecondary;