import Cards from '../cards/Cards';
import Description from '../description/Description';
import Title from '../title/Title';

const Planet = ({ title, text, cardtexto, numero }) => {
	return (
		<>
			<Title title={title} />
			<Description text={text} />
			<Cards cardtexto={cardtexto} numero={numero} />
			<Cards cardtexto={cardtexto} numero={numero} />
			<Cards cardtexto={cardtexto} numero={numero} />
			<Cards cardtexto={cardtexto} numero={numero} />
		</>
	);
};

export default Planet;
