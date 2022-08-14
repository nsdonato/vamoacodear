import './App.css'

import { Avatar } from './atoms/Avatar'
import { Heading } from './atoms/Heading'
import { IconButton } from './atoms/IconButton'
import { socials } from './models'
import { Container } from './objects/Container'
import { Layout } from './objects/Layout'

function App() {
	return (
		<Layout>
			<Avatar src='/noe.png' />
			<Heading level='h4'>Noe ✨ Frontend Dev ✨</Heading>
			<Container tag='section'>
				{socials.map((social) => {
					return (
						<IconButton key={social.name} icon={social.name.toLowerCase()}>
							{social.name}
						</IconButton>
					)
				})}
			</Container>
			<footer>
				<Heading level='h2' typo='major'>
					VamoacodeaR - {new Date().getFullYear()}
				</Heading>
			</footer>
		</Layout>
	)
}

export default App
