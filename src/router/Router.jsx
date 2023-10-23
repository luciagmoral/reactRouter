import { Route, Routes } from 'react-router-dom';
import Title from '../components/title/Title';

const Router = () => (
	<Routes>
		<Route path='/' element={<Title title='Home'>Home</Title>} />
		<Route path='about' element={<Title title='About'>About</Title>} />
		<Route path='contact' element={<Title title='Contact'>Contact</Title>} />
	</Routes>
);

export default Router;
