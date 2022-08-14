import { socials } from '../models'
import { classNames } from '../shared/classNames'
import styles from './IconButton.module.scss'
import { Image } from './Image'

export interface IconButtonProps {
	mode?: 'light' | 'dark'
	size?: 'large' | 'medium' | 'small' | 'xl'
	icon: string
	children?: string
}

interface Overload {
	(props: IconButtonProps): JSX.Element
}

export const IconButton: Overload = ({
	mode = 'light',
	size = 'large',
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

	const handleClick = (iconName: string) => {
		const socialsNetworks = socials.find(
			(item) => item.name.toLowerCase() == iconName
		)
		window.open(socialsNetworks?.url, '_blank')
	}

	return (
		<button {...componentProps} onClick={() => handleClick(icon)}>
			<>
				<Image icon={icon} size={size} />
				<span className={styles['icon-btn--centered']}>{props.children}</span>
			</>
		</button>
	)
}
