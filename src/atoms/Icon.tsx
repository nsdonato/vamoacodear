import { classNames } from '../shared/classNames'
import styles from './Icon.module.scss'

export interface IconProps {
	icon: string
	size?: 'small' | 'medium' | 'large' | 'xl'
}

export const Icon = ({ size = 'xl', icon }: IconProps) => {
	return (
		<img
			src={`../img/${icon}.png`}
			className={classNames(styles['icon'], styles[`icon--${size}`])}
		/>
	)
}
