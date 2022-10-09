import styles from "./Votes.module.scss";

import iconPlus from "@/assets/images/icon-plus.svg";
import iconMinus from "@/assets/images/icon-minus.svg";

interface Props {
	className?: string;
	initialVotes: number;
	style?: React.CSSProperties;
	onUpvote: () => void;
	onDownvote: () => void;
}
function Votes(props: Props) {
	return (
		<div className={`${styles["votes"]} ${props.className} f-center`} style={props.style}>
			<img src={iconPlus} alt="+" onClick={props.onUpvote} width="11" height="11" />
			<p className="text-purple" style={{ width: `${props.initialVotes.toString().length}ch` }}>
				{props.initialVotes}
			</p>
			<img src={iconMinus} alt="-" onClick={props.onDownvote} width="11" height="3" />
		</div>
	);
}

export default Votes;
