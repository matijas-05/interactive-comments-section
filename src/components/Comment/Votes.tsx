import { useState } from "react";
import styles from "./Votes.module.scss";

import iconPlus from "@/assets/images/icon-plus.svg";
import iconMinus from "@/assets/images/icon-minus.svg";

interface Props {
	className?: string,
	initialVotes: number,
	style?: React.CSSProperties
}
function Votes(props: Props) {
	const [votes, setVotes] = useState(props.initialVotes);

	return (
		<div className={`${styles["votes"]} ${props.className} f-center`} style={props.style}>
			<img src={iconPlus} alt="+" onClick={() => setVotes(votes + 1)} width="11" height="11" />
			<p className="text-purple" style={{ width: `${votes.toString().length}ch` }}>{votes}</p>
			<img src={iconMinus} alt="-" onClick={() => setVotes(votes - 1)} width="11" height="3" />
		</div>
	);
}

export default Votes;