import TextareaAutosize from "react-textarea-autosize";

interface Props {
	mention?: string,
	parentRef?: React.RefObject<HTMLDivElement>,
	isEditing: boolean,
	message: string
}
function CommentMessage(props: Props) {
	return (
		<p>
			{props.mention &&
				<span className="text-purple hover-opacity" style={{ cursor: "pointer" }}
					onClick={() => {
						const parentElement = props.parentRef!.current!.firstChild as HTMLDivElement;
						if (parentElement.getBoundingClientRect().top < 0)
							parentElement.scrollIntoView({ behavior: "smooth" });
						parentElement.animate([{ backgroundColor: `#e6e60073` }, {}], { duration: 1000 });
					}}>
					@{props.mention} &nbsp;
				</span>
			}
			{!props.isEditing ? props.message :
				<TextareaAutosize defaultValue={props.message}></TextareaAutosize>
			}
		</p>
	)
}

export default CommentMessage