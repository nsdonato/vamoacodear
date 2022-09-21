import './App.css'

import noe from '/noe.webp'

import { Avatar, Heading, IconButton } from './atoms'
import { socials } from './models'
import { Container, Layout } from './objects'

function App() {
	return (
		<Layout>
			<Avatar src={noe} />
			<Heading level='h4'>Noe ✨ Frontend Dev</Heading>
			<Container tag='section'>
				{socials.map((social) => {
					const { name, alt, desc } = social
					return (
						<IconButton key={name} icon={name} alt={alt}>
							{desc}
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
