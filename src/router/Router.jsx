import { Route, Routes } from 'react-router-dom';
import Planet from '../components/planet/Planet';

const Router = () => (
	<Routes>
		<Route
			path='mercury'
			element={
				<Planet
					title='Mercury'
					text="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
					cardtexto='ROTATION'
					numero=' 58.6 DAYS'
				>
					MERCURY
				</Planet>
			}
		/>
		<Route
			path='venus'
			element={
				<Planet title='Venus' text='ytryryur yryfyyur utyutyutyut t ttitititit'>
					VENUS
				</Planet>
			}
		/>
		<Route
			path='earth'
			element={
				<Planet title='Earth' text='ytryryur yryfyyur utyutyutyut t ttitititit'>
					EARTH
				</Planet>
			}
		/>
		<Route
			path='jupiter'
			element={
				<Planet
					title='Jupiter'
					text='ytryryur yryfyyur utyutyutyut t ttitititit'
				>
					JUPITER
				</Planet>
			}
		/>
		<Route
			path='saturn'
			element={
				<Planet
					title='Saturn'
					text='ytryryur yryfyyur utyutyutyut t ttitititit'
				>
					SATURN
				</Planet>
			}
		/>
		<Route
			path='uranus'
			element={
				<Planet
					title='Uranus'
					text='ytryryur yryfyyur utyutyutyut t ttitititit'
				>
					URANUS
				</Planet>
			}
		/>
		<Route
			path='neptune'
			element={
				<Planet
					title='Neptune'
					text='ytryryur yryfyyur utyutyutyut t ttitititit'
				>
					NEPTUNE
				</Planet>
			}
		/>
	</Routes>
);

export default Router;
