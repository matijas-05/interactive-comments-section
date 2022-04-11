import { PropsWithChildren, ReactNode } from 'react'
import MediaQuery from 'react-responsive'

const breakpoint = 768;
export const Mobile = (props: PropsWithChildren<ReactNode>) => {
	return (
		<MediaQuery maxWidth={breakpoint}>{props.children}</MediaQuery>
	)
}
export const Desktop = (props: PropsWithChildren<ReactNode>) => {
	return (
		<MediaQuery minWidth={breakpoint + 1}>{props.children}</MediaQuery>
	)
}
