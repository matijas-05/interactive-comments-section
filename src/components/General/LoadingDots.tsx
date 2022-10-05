import { CSSProperties } from "react";
import styles from "./LoadingDots.module.scss";

interface Props {
	enabled: boolean;
	disabledMessage: string;
	padding?: string;
}
function LoadingDots(props: Props) {
	return props.enabled ? (
		<div style={{ padding: props.padding ?? "0.2625rem 0" }} className={`${styles["loading-dots"]}`}>
			<div className={styles["dot"]} style={{ "--order": 1 } as CSSProperties}></div>
			<div className={styles["dot"]} style={{ "--order": 2 } as CSSProperties}></div>
			<div className={styles["dot"]} style={{ "--order": 3 } as CSSProperties}></div>
		</div>
	) : (
		<span>{props.disabledMessage}</span>
	);
}

export default LoadingDots;
