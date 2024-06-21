import gitHub from '/icons/gitHub.svg'
import instagram from '/icons/instagram.svg'
import vk from '/icons/vk.svg'

function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a href='#!'>
								<img src={vk} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!'>
								<img src={instagram} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!'>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
					</ul>
					<div className='copyright'>
						<p>© 2024 frontend-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
