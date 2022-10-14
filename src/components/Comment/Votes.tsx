import React from "react";
import { getCurrentUser } from "@/firebase";
import { useSignInModalStore } from "@/store";

import iconPlus from "@/assets/images/icon-plus.svg";
import iconMinus from "@/assets/images/icon-minus.svg";
import styles from "./Votes.module.scss";

interface Props {
	className?: string;
	style?: React.CSSProperties;
	upvotes: string[];
	downvotes: string[];
	onUpvote: () => void;
	onDownvote: () => void;
}
function Votes(props: Props) {
	const votesCount = props.upvotes.length - props.downvotes.length;
	const currentUser = getCurrentUser();
	const signInModalStore = useSignInModalStore();

	return (
		<div
			className={`${styles["votes"]} ${!currentUser && styles["disabled"]} ${props.className} f-center`}
			style={props.style}
		>
			<img
				className={props.upvotes.includes(currentUser?.uid ?? "") ? styles["selected"] : undefined}
				src={iconPlus}
				alt="+"
				onClick={currentUser ? props.onUpvote : () => signInModalStore.setIsOpen(true)}
				width="11"
				height="11"
			/>

			<p className="text-purple" style={{ width: `${votesCount.toString().length}ch` }}>
				{votesCount}
			</p>

			<img
				className={props.downvotes.includes(currentUser?.uid ?? "") ? styles["selected"] : undefined}
				src={iconMinus}
				alt="-"
				onClick={currentUser ? props.onDownvote : () => signInModalStore.setIsOpen(true)}
				width="11"
				height="3"
			/>
		</div>
	);
}

export default Votes;
