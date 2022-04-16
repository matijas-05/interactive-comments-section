import { useState } from "react";
import styles from "./ButtonPrimary.module.scss";

interface Props {
	className?: string,
	iconSrc?: string,
	iconClassName?: string,
	/** Only needed when child is not a string */
	alt?: string,
	onClick: () => void,
	children?: React.ReactNode
}
function ButtonPrimary(props: Props) {
	// State change triggers component reload
	// thus setting img width and height after img is loaded
	const [, setImgLoaded] = useState(false);

	const img = new Image();
	img.src = props.iconSrc ?? "";
	
	return (
		<button className={`f-center ${styles["btn-primary"]} ${props.className} hover-opacity`} onClick={props.onClick}>
			{props.iconSrc && <img className={props.iconClassName} src={props.iconSrc} width={img.width} height={img.height} alt={typeof props.children === "string" ? props.children : props.alt} onLoad={() => setImgLoaded(true)} />}
			{props.children}
		</button>
	);
}

export default ButtonPrimary;