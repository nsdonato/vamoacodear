import { classNames } from '../shared/classNames'
import styles from './Button.module.scss'

export interface ButtonProps {
	mode?: 'primary'
	size?: 'large'
	children: string
}

interface Overload {
	(props: ButtonProps): JSX.Element
}

export const Button: Overload = ({
	mode = 'primary',
	size = 'large',
	...props
}) => {
	const componentProps = {
		className: classNames(
			styles['btn'],
			styles[`btn--${mode}`],
			styles[`btn--${size}`]
		),
		...props,
	}

	return <button {...componentProps} />
}
