import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'

import './main.scss'

function App() {
	return (
		<>
			<Router>
				<Nav />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>

				<Footer />
			</Router>
		</>
	)
}

export default App
