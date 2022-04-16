import styles from "./ButtonSecondary.module.scss";

interface Props {
	className?: string,
	iconSrc?: string,
	alt?: string,
	noHoverEffect?: boolean,
	onClick: () => void,
	children?: string | React.ReactNode,
}
function ButtonSecondary(props: Props) {
	const img = new Image();
	img.src = props.iconSrc ?? "";

	return (
		<button className={`${styles["btn-secondary"]} ${!props.noHoverEffect && "hover-opacity"} ${props.className}`} onClick={props.onClick}>
			<img src={props.iconSrc} width={img.width} height={img.height} alt={typeof props.children === "string" ? props.children : props.alt} />
			{props.children}
		</button>
	);
}

export default ButtonSecondary;