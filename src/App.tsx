import './App.css'

import { Avatar, Heading, IconButton } from './atoms'
import { socials } from './models'
import { Container, Layout } from './objects'

function App() {
	return (
		<Layout>
			<Avatar src='/noe.png' />
			<Heading level='h4'>Noe ✨ Frontend Dev</Heading>
			<Container tag='section'>
				{socials.map((social) => {
					return (
						<IconButton key={social.name} icon={social.name}>
							{social.desc}
						</IconButton>
					)
				})}
			</Container>
			<footer>
				<Heading level='h2' typo='major'>
					VamoacodeaR &copy; {new Date().getFullYear()}
				</Heading>
			</footer>
		</Layout>
	)
}

export default App
