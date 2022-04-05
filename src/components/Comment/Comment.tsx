import styles from "./Comment.module.scss"
import Votes from "./Votes";

function Comment() {
	return (
		<div className={styles["comment"]}>
			<Votes />
		</div>
	);
}

export default Comment;
