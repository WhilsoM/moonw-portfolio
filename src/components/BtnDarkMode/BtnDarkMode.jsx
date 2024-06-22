import { useEffect, useRef, useState } from 'react'
import { detectDarkMode } from '../../utils/detectDarkMode'

import './BtnDarkMode.scss'
import moon from '/icons/moon.svg'
import sun from '/icons/sun.svg'

const BtnDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(detectDarkMode)
	const btnRef = useRef(null)

	useEffect(() => {
		if (isDarkMode === 'dark') {
			btnRef.current.classList.add('dark-mode-btn--active')
			document.body.classList.add('dark')
		} else {
			btnRef.current.classList.remove('dark-mode-btn--active')

			document.body.classList.remove('dark')
		}
	}, [isDarkMode])

	function toggleDarkMode() {
		setIsDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light'
		})
	}

	return (
		<button ref={btnRef} className='dark-mode-btn' onClick={toggleDarkMode}>
			<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
		</button>
	)
}

export default BtnDarkMode
