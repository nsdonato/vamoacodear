import { classNames } from '../shared/classNames'
import styles from './Avatar.module.scss'

export interface AvatarProps {
	src: string
	alt?: string
	size?: 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'huge' | 'mega'
}

export const Avatar = ({ src, alt = '', size = 'huge' }: AvatarProps) => {
	const componentProps = {
		className: classNames(styles['avatar'], styles[`avatar--${size}`]),
	}

	return (
		<span {...componentProps}>
			<img
				src={src}
				alt={alt}
				style={{ objectFit: 'cover' }}
				{...componentProps}
			/>
		</span>
	)
}
