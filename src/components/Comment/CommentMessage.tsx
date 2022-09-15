import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import scrollIntoView from "scroll-into-view";

interface Props {
	mention?: string,
	parentRef?: React.RefObject<HTMLDivElement>,
	isEditing: boolean,
	toggleEditing: () => void,
	editMessageChanged: (newMessage: string) => void,
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
	}, [props.isEditing]);

	return (
		<p style={{ whiteSpace: "pre-wrap" }}>
			{!props.isEditing && mention && mention === props.mention &&
				<span className="text-purple hover-opacity" style={{ cursor: "pointer" }}
					onClick={() => {
						const parentElement = props.parentRef!.current!.firstChild as HTMLDivElement;

						if (parentElement.getBoundingClientRect().top < parseInt(document.querySelector<HTMLElement>(".comments div > div")!.style.scrollMargin.replace("px", "")))
							scrollIntoView(parentElement, { ease: value => Math.sin(value * Math.PI) * .1 });

						parentElement.animate([{ backgroundColor: "#e6e60073" }, {}], { duration: 1000 });
					}}>
					@{mention + " "}
				</span>
			}

			{!props.isEditing ?
				commentMessage :
				<TextareaAutosize ref={inputRef} defaultValue={editMessage} onFocus={() => props.editMessageChanged(editMessage)}
					onChange={e => props.editMessageChanged(e.target.value)} onKeyDown={(e) => e.key === "Escape" && props.toggleEditing()}
				/>
			}
		</p>
	);
}

export default CommentMessage;