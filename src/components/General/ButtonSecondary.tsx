import { useState } from "react";
import styles from "./ButtonSecondary.module.scss";

interface Props {
	className?: string,
	iconSrc?: string,
	/** Only needed when child is not a string */
	alt?: string,
	noHoverEffect?: boolean,
	onClick: () => void,
	children?: string | React.ReactNode,
}
function ButtonSecondary(props: Props) {
	// State change triggers component reload
	// thus seting img width and height after img is loaded
	const [, setImgLoaded] = useState(false);

	const img = new Image();
	img.src = props.iconSrc ?? "";

	return (
		<button className={`${styles["btn-secondary"]} ${!props.noHoverEffect && "hover-opacity"} ${props.className}`} onClick={props.onClick}>
			{props.iconSrc && <img src={props.iconSrc} width={img.width} height={img.height} alt={typeof props.children === "string" ? props.children : props.alt} onLoad={() => setImgLoaded(true)} />}
			{props.children}
		</button>
	);
}

export default ButtonSecondary;