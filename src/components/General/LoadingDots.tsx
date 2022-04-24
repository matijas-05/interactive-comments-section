import { CSSProperties } from "react";
import { DivProps } from "react-html-props";
import styles from "./LoadingDots.module.scss";

function LoadingDots(props: DivProps) {
	return (
		<div {...props} className={`${styles["loading-dots"]} ${props.className}`}>
			<div className={styles["dot"]} style={{ "--order": 1 } as CSSProperties}></div>
			<div className={styles["dot"]} style={{ "--order": 2 } as CSSProperties}></div>
			<div className={styles["dot"]} style={{ "--order": 3 } as CSSProperties}></div>
		</div>
	);
}

export default LoadingDots;