import { useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import scrollIntoView from "scroll-into-view";

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
		<p style={{ whiteSpace: "pre-wrap" }}>
			{!props.isEditing && props.mention && (
				<span
					className="text-purple hover-opacity"
					style={{ cursor: "pointer" }}
					onClick={() => {
						const parentElement = props.parentRef!.current!.firstChild as HTMLDivElement;

						if (
							parentElement.getBoundingClientRect().top <
							parseInt(
								document
									.querySelector<HTMLElement>(".comments div > div")!
									.style.scrollMargin.replace("px", "")
							)
						)
							scrollIntoView(parentElement, { ease: value => Math.sin(value * Math.PI) * 0.1 });

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
