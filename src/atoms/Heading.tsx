import React from 'react'

import { classNames } from '../shared/classNames'
import styles from './Heading.module.scss'

export interface HeadingProps {
	level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	id?: string
	children: React.ReactNode
	color?: 'white' | 'black'
	align?: string
	typo?: string
}

export const Heading = ({
	children,
	level = 'h1',
	id,
	color = 'white',
	align = '',
	typo = '',
	...props
}: HeadingProps) => {
	const Tag = level

	return (
		<Tag
			id={id}
			className={classNames(
				styles['heading'],
				styles[`heading--${color}`],
				styles[`heading--${align}`],
				styles[`heading--${typo}`]
			)}
			{...props}
		>
			{children}
		</Tag>
	)
}
