import React from 'react';
import styles from './ButtonPrimary.module.scss';

interface Props {
	className?: string,
	style?: React.CSSProperties,
	onClick: () => void,
	children?: React.ReactNode
}
function ButtonPrimary(props: Props) {
	return (
		<div style={props.style} className={`${styles["btn-primary"]} ${props.className} hover-opacity`} onClick={props.onClick}>
			{props.children}
		</div>
	)
}

export default ButtonPrimary