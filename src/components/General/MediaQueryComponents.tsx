import React, { PropsWithChildren, ReactNode } from 'react'
import MediaQuery from 'react-responsive'

export const Mobile = (props: PropsWithChildren<ReactNode>) => {
	return (
		<MediaQuery maxWidth={768}>{props.children}</MediaQuery>
	)
}
export const Desktop = (props: PropsWithChildren<ReactNode>) => {
	return (
		<MediaQuery minWidth={768}>{props.children}</MediaQuery>
	)
}
