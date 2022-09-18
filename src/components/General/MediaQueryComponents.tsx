import { ReactNode } from "react";
import MediaQuery from "react-responsive";

const breakpoint = 768;
interface Props {
	children?: ReactNode;
}
export const Mobile = (props: Props) => {
	return <MediaQuery maxWidth={breakpoint}>{props.children}</MediaQuery>;
};
export const Desktop = (props: Props) => {
	return <MediaQuery minWidth={breakpoint + 1}>{props.children}</MediaQuery>;
};
