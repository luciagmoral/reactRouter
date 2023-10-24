import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/mercury'>MERCURY</Link>
				</li>

				<li>
					<Link to='/venus'>VENUS</Link>
				</li>

				<li>
					<Link to='/earth'>EARTH</Link>
				</li>
				<li>
					<Link to='/jupiter'>JUPITER</Link>
				</li>
				<li>
					<Link to='/saturn'>SATURN</Link>
				</li>
				<li>
					<Link to='/uranus'>URANUS</Link>
				</li>
				<li>
					<Link to='/neptune'>NEPTUNE</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
