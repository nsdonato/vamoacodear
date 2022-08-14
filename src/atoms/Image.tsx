import { classNames } from '../shared/classNames'
import styles from './Image.module.scss'

export interface ImageProps {
	icon: string
	size?: 'small' | 'medium' | 'large' | 'xl'
}

export const Image = ({ size = 'xl', icon }: ImageProps) => {
	return (
		<img
			src={`/${icon}.png`}
			className={classNames(styles['icon'], styles[`icon--${size}`])}
		/>
	)
}
