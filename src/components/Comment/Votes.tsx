import { useState } from "react";
import styles from "./Votes.module.scss";

interface Props {
	initialVotes: number
}
function Votes(props: Props) {
	const [votes, setVotes] = useState(props.initialVotes);

	return (
		<div className={styles["votes"]}>
			<img src="/src/assets/images/icon-plus.svg" alt="+" onClick={() => setVotes(votes + 1)} />
			<p className="accent-purple" style={{ width: `${votes.toString().length}ch` }}>{votes}</p>
			<img src="/src/assets/images/icon-minus.svg" alt="-" onClick={() => setVotes(votes - 1)} />
		</div>
	);
}

export default Votes;