import styles from "./ProfilePicture.module.scss";

interface Props {
	src: string;
}
function ProfilePicture(props: Props) {
	return (
		<img className={styles["profile-pic"]} src={props.src} alt="" width="32" height="32" />
	);
}

export default ProfilePicture;