import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface Props {
	mention?: string,
	parentRef?: React.RefObject<HTMLDivElement>,
	isEditing: boolean,
	toggleEditing: () => void,
	message: string
}
function CommentMessage(props: Props) {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [mention, setMention] = useState(props.mention);
	const [commentMessage, setCommentMessage] = useState(props.message);
	const [editMessage, setEditMessage] = useState("");

	// Init mention
	useEffect(() => {
		setMention(commentMessage.split("@")[1]?.split(" ")[0]);
		if (mention) {
			setCommentMessage(commentMessage.replace(`@${mention} `, ""));
		}
		setEditMessage(commentMessage);
	}, []);

	// Focus on edit
	useEffect(() => {
		if (props.isEditing) {
			const textArea = inputRef.current!;
			const cursorPos = textArea.selectionEnd + textArea.value.length;
			textArea.selectionStart = cursorPos;
			textArea.selectionEnd = cursorPos;
			textArea.focus();
		}
	});

	return (
		<p>
			{!props.isEditing && mention && mention === props.mention &&
				<span className="text-purple hover-opacity" style={{ cursor: "pointer" }}
					onClick={() => {
						const parentElement = props.parentRef!.current!.firstChild as HTMLDivElement;
						if (parentElement.getBoundingClientRect().top < Number.parseInt(document.getElementById("root")!.style.scrollMargin.replace("px", "")))
							parentElement.scrollIntoView({ behavior: "smooth" });
						parentElement.animate([{ backgroundColor: "#e6e60073" }, {}], { duration: 1000 });
					}}>
					@{mention + " "}
				</span>
			}
			{!props.isEditing ? commentMessage :
				<TextareaAutosize ref={inputRef} defaultValue={editMessage} onKeyDown={(e) => e.key === "Escape" && props.toggleEditing()}></TextareaAutosize>
			}
		</p>
	);
}

export default CommentMessage;