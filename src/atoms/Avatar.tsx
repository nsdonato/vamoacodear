import styles from './Avatar.module.scss'

export interface AvatarProps {
	src: string
	alt?: string
	size?: 'small' | 'medium' | 'large' | 'xl' | 'xxl'
}

const sizes = {
	small: 40,
	medium: 48,
	large: 64,
	xl: 74,
	xxl: 174,
}

export const Avatar = ({ src, alt = '', size = 'medium' }: AvatarProps) => {
	const pxSize = sizes[size]

	return (
		<span
			className={styles['avatar']}
			style={{ width: `${pxSize}px`, height: `${pxSize}px` }}
		>
			<img
				src={src}
				alt={alt}
				width={pxSize}
				height={pxSize}
				style={{ objectFit: 'cover' }}
			/>
		</span>
	)
}
