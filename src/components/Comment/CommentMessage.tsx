import React, { useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface Props {
	message: string;
	mention?: string;
	parentRef?: React.RefObject<HTMLDivElement>;
	isEditing: boolean;
	toggleEditing: () => void;
	editMessageChanged: (newMessage: string) => void;
}
function CommentMessage(props: Props) {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	// Focus on edit
	useEffect(() => {
		if (props.isEditing) {
			const textArea = inputRef.current!;
			const cursorPos = textArea.selectionEnd + textArea.value.length;
			textArea.selectionStart = cursorPos;
			textArea.selectionEnd = cursorPos;
			textArea.focus();
		}
	}, [props.isEditing]);

	return (
		<p style={{ wordBreak: "break-all", whiteSpace: "normal" }}>
			{!props.isEditing && props.mention && (
				<span
					className="text-purple hover-opacity"
					style={{ cursor: "pointer" }}
					onClick={() => {
						const parentElement = props.parentRef!.current!.firstChild as HTMLDivElement;
						if (
							parentElement.getBoundingClientRect().top <
							parseInt(parentElement.style.scrollMarginTop.replace("px", ""))
						)
							parentElement.scrollIntoView({ behavior: "smooth" });

						parentElement.animate([{ backgroundColor: "#e6e60073" }, {}], { duration: 1000 });
					}}
				>
					@{props.mention + " "}
				</span>
			)}

			{!props.isEditing ? (
				props.message
			) : (
				<TextareaAutosize
					ref={inputRef}
					defaultValue={props.message}
					onFocus={() => props.editMessageChanged(props.message)}
					onChange={e => props.editMessageChanged(e.target.value)}
					onKeyDown={e => e.key === "Escape" && props.toggleEditing()}
				/>
			)}
		</p>
	);
}

export default CommentMessage;
