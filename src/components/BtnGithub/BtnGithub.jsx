import githubIcon from '/icons/gitHub-black.svg'

const BtnGithub = ({ link }) => {
	return (
		<a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
			<img src={githubIcon} alt='github icon' />
			GitHub repo
		</a>
	)
}

export default BtnGithub
