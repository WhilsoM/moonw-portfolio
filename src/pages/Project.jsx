import { useParams } from 'react-router-dom'
import BtnGithub from '../components/BtnGithub/BtnGithub'
import { cards } from '../helpers/cardsList'

const Project = () => {
	const { id } = useParams()
	const card = cards[id]

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{card.title}</h1>

					<img
						src={card.imgBig}
						alt={card.title}
						className='project-details__cover'
					/>

					<div className='project-details__desc'>
						<p>Skills: {card.skills} </p>
					</div>

					{card?.githubLink && <BtnGithub link='https://github.com/' />}
				</div>
			</div>
		</main>
	)
}

export default Project
