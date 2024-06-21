import { useEffect, useState } from 'react'
import './BtnDarkMode.scss'

import moon from '/icons/moon.svg'
import sun from '/icons/sun.svg'

const BtnDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {}, [isDarkMode])

	function toggleDarkMode() {
		setIsDarkMode((current) => setIsDarkMode(!current))
	}

	return (
		<button className='dark-mode-btn' onClick={toggleDarkMode}>
			<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
		</button>
	)
}

export default BtnDarkMode
