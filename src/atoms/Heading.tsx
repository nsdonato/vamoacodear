import React from 'react'

import { classNames } from '../shared/classNames'
import styles from './Heading.module.scss'

export interface HeadingProps {
	level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	size?: 'small' | 'medium' | 'large'
	id?: string
	children: React.ReactNode
	color?: 'white' | 'black'
}

export const Heading = ({
	children,
	level = 'h1',
	size = 'small',
	id,
	color = 'white',
	...props
}: HeadingProps) => {
	const Tag = level

	return (
		<Tag
			id={id}
			className={classNames(
				styles['heading'],
				styles[`heading--${size}`],
				styles[`heading--${color}`]
			)}
			{...props}
		>
			{children}
		</Tag>
	)
}
