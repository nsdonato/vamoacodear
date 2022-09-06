import './App.css'

import { Avatar, Button, Heading } from './atoms'
import { Container } from './objects/Container'
import { Layout } from './objects/Layout'

function App() {
	return (
		<Layout>
			<Avatar size='xxl' src='./img/noe.png' alt='' />
			<Heading level='h1'>@vamoacodear</Heading>
			<Heading level='h2'>Noe ✨ Frontend Dev ✨</Heading>
			<Container tag='section'>
				<Button>Twitch</Button>
				<Button>TikTok</Button>
				<Button>Youtube</Button>
				<Button>Twitter</Button>
				<Button>Discord</Button>
			</Container>
		</Layout>
	)
}

export default App
