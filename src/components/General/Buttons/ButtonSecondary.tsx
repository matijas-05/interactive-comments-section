import React, { useState } from "react";
import { ButtonProps } from "react-html-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./ButtonSecondary.module.scss";

interface Props extends ButtonProps {
	iconSrc?: string;
	iconClassName?: string;
	faIcon?: IconDefinition;
	/** Only needed when child is not a string */
	alt?: string;
	noHoverEffect?: boolean;
	children?: string | React.ReactNode;
}
function ButtonSecondary(props: Props) {
	// State change triggers component reload
	// thus setting img width and height after img is loaded
	const [, setImgLoaded] = useState(false);

	const img = new Image();
	img.src = props.iconSrc ?? "";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { iconSrc, iconClassName, faIcon, alt, noHoverEffect, children, ...rest } = props;

	return (
		<button
			{...rest}
			className={`f-center ${styles["btn-secondary"]} ${!props.noHoverEffect && "hover-opacity"}
			${props.className}`}
			aria-label={typeof props.children === "string" ? props.children : props.alt}
		>
			{props.iconSrc && (
				<img
					className={props.iconClassName}
					src={props.iconSrc}
					width={img.width}
					height={img.height}
					alt={typeof props.children === "string" ? props.children : props.alt}
					onLoad={() => setImgLoaded(true)}
				/>
			)}
			{faIcon && <FontAwesomeIcon className={props.iconClassName} icon={props.faIcon!} />}
			{props.children}
		</button>
	);
}

export default ButtonSecondary;
