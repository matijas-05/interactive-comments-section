import { useState } from "react";
import styles from "./Votes.module.scss";

import iconPlus from "/src/assets/images/icon-plus.svg";
import iconMinus from "/src/assets/images/icon-minus.svg";

interface Props {
	initialVotes: number
}
function Votes(props: Props) {
	const [votes, setVotes] = useState(props.initialVotes);

	return (
		<div className={styles["votes"]}>
			<img src={iconPlus} alt="+" onClick={() => setVotes(votes + 1)} />
			<p className="accent-purple" style={{ width: `${votes.toString().length}ch` }}>{votes}</p>
			<img src={iconMinus} alt="-" onClick={() => setVotes(votes - 1)} />
		</div>
	);
}

export default Votes;