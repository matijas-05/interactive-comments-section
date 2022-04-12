import React from 'react';
import styles from './ButtonPrimary.module.scss';

interface Props {
	className?: string,
	disabled?: boolean,
	onClick: () => void,
	children?: React.ReactNode
}
function ButtonPrimary(props: Props) {
	return (
		<div className={`${styles["btn-primary"]} ${props.className} hover-opacity`} onClick={!props.disabled && props.onClick}>
			{props.children}
		</div>
	)
}

export default ButtonPrimary