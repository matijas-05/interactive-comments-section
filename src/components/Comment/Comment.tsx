import BtnWithIcon from "../Buttons/BtnWithIcon";
import styles from "./Comment.module.scss"
import Votes from "./Votes";

function Comment() {
	return (
		<div className={styles["comment"]}>
			<div className={`${styles["info"]} f-ai-c g-1`}>
				<img src="/src/assets/images/avatars/image-amyrobson.webp" alt="icon" />
				<p className={styles["username"]}>amyrobson</p>
				<p className={styles["date"]}>1 month ago</p>
			</div>
			<p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
			<div className="left-right">
				<Votes />
				<BtnWithIcon imgSrc="/src/assets/images/icon-reply.svg" text="Reply" />
			</div>
		</div>
	);
}

export default Comment;
