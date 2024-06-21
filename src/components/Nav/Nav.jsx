import { NavLink } from 'react-router-dom'

import BtnDarkMode from '../BtnDarkMode/BtnDarkMode'
import './Nav.scss'

function Nav() {
	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'

	const changeActiveLink = ({ isActive }) =>
		isActive ? activeLink : normalLink

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>moonw</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink to='/' className={changeActiveLink}>
								Home
							</NavLink>
						</li>

						<li className='nav-list__item'>
							<NavLink to='/projects' className={changeActiveLink}>
								Projects
							</NavLink>
						</li>

						<li className='nav-list__item'>
							<NavLink to='/contacts' className={changeActiveLink}>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Nav
