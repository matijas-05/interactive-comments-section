interface Props {
	src: string;
}
function ProfilePicture(props: Props) {
	return (
		<img src={props.src} alt="" width="32" height="32" />
	);
}

export default ProfilePicture;