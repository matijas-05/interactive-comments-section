import styles from "./BtnWithIcon.module.scss"

interface BtnWithIconProps {
	imgSrc: string,
	text: string,
}
function BtnWithIcon(props: BtnWithIconProps) {
	return (
		<div className={`${styles["btn-with-icon"]} `}>
			<img src={props.imgSrc} alt="" />
			<p className="accent-purple">{props.text}</p>
		</div>
	);
}

export default BtnWithIcon;