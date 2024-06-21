import { NavLink } from 'react-router-dom'
import './Card.scss'

const Card = ({ title, img, index, ...props }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className='project' {...props}>
				<img src={img} alt='Project img' className='project__img' />
				<h3 className='project__title'> {title} </h3>
			</li>
		</NavLink>
	)
}

export default Card
