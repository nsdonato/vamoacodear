import './App.css'

import { Avatar } from './atoms/Avatar'
import { Button } from './atoms/Button'
import { Heading } from './atoms/Heading'
import { Container } from './objects/Container'
import { Layout } from './objects/Layout'

function App() {
	return (
		<Layout>
			<Avatar size='xxl' src='./img/noe.png' alt='' />
			<Heading level='h1'>@vamoacodear</Heading>
			<Heading level='h2'>Noe ✨ Frontend Dev ✨</Heading>
			<Container tag='section'>
				{/* <IconButton icon='twitch'>Twitch</IconButton> */}
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
