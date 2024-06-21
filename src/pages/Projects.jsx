import Card from '../components/Card/Card'
import { cards } from '../helpers/cardsList'

const Projects = () => {
	cards
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					{cards.map((card, index) => (
						<Card
							key={card.title}
							title={card.title}
							img={card.img}
							index={index}
						/>
					))}
				</ul>
			</div>
		</main>
	)
}

export default Projects
