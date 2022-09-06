import { classNames } from '../shared/classNames'
import { Icon } from './Icon'
import styles from './IconButton.module.scss'

type HtmlButtonProps = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	'children'
> & {
	href?: undefined
}

export interface IconButtonProps {
	mode?: 'light' | 'dark'
	size?: 'large' | 'medium' | 'small' | 'xl'
	label: string
	icon: string
	children: React.ReactNode
}

interface Overload {
	(props: HtmlButtonProps & IconButtonProps): JSX.Element
}

export const IconButton: Overload = ({
	mode = 'light',
	size = 'medium',
	icon,
	...props
}) => {
	const componentProps = {
		className: classNames(
			styles['icon-btn'],
			styles[`icon-btn--${mode}`],
			styles[`icon-btn--${size}`]
		),
		...props,
	}

	return (
		<button {...componentProps}>
			<>
				<Icon icon={icon} size={size} />
				{props.children}
			</>
		</button>
	)
}
