import './App.css';
import { Routes, Route, useMatch, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogItemDetail from './components/BlogItemDetail';

function App() {
	let location = useLocation();
	console.log(location.pathname);
	return (
		<div className="App">
			<header className={`header ${location.pathname === '/' ? 'header_img' : ''} `}>
				<h1>My Life</h1>
				<NavBar />
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/:label' element={<BlogItemDetail />} />
			</Routes>
		</div>
	);
}

export default App;
