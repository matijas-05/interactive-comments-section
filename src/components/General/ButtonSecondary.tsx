import styles from "./ButtonSecondary.module.scss"

interface Props {
	iconSrc?: string,
	alt?: string,
	text?: string,
	onClick?: () => void,
	children?: React.ReactNode
}
function ButtonSecondary(props: Props) {
	return (
		<div className={styles["btn-secondary"]} onClick={props.onClick}>
			<img src={props.iconSrc} alt={props.alt} />
			<p>{props.children}</p>
		</div>
	);
}

export default ButtonSecondary;