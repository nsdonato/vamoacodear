import { classNames } from '../shared/classNames'
import styles from './Image.module.scss'

export interface ImageProps {
	icon: string
	size?: 'small' | 'medium' | 'large' | 'xl'
	alt?: string
}

export const Image = ({ size = 'xl', icon, alt = '' }: ImageProps) => {
	return (
		<img
			src={`/${icon}.webp`}
			className={classNames(styles['icon'], styles[`icon--${size}`])}
			alt={alt}
		/>
	)
}
