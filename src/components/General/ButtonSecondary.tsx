import styles from "./ButtonSecondary.module.scss";

interface Props {
	className?: string,
	iconSrc?: string,
	alt?: string,
	noHoverEffect?: boolean,
	onClick: () => void,
	children?: React.ReactNode
}
function ButtonSecondary(props: Props) {
	return (
		<div className={`${styles["btn-secondary"]} ${!props.noHoverEffect && "hover-opacity"} ${props.className}`}
			onClick={props.onClick}>
			<img src={props.iconSrc} alt={props.alt} />
			{props.children}
		</div>
	);
}

export default ButtonSecondary;