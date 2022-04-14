import styles from "./ButtonPrimary.module.scss";

interface Props {
	className?: string,
	onClick: () => void,
	children?: React.ReactNode
}
function ButtonPrimary(props: Props) {
	return (
		<button className={`${styles["btn-primary"]} ${props.className} hover-opacity`} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default ButtonPrimary;