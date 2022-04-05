import { useState } from "react";
import styles from "./Votes.module.scss";

function Votes() {
	const [votes, setVotes] = useState(0);

	return (
		<div className={styles["votes"]}>
			<img src="/src/assets/images/icon-plus.svg" alt="+" onClick={() => setVotes(votes + 1)} />
			<p className="accent-purple" style={{ width: `${votes.toString().length}ch` }}>{votes}</p>
			<img src="/src/assets/images/icon-minus.svg" alt="-" onClick={() => setVotes(votes - 1)} />
		</div>
	);
}

export default Votes;