import './Home.css';

import { gifs } from '../../Assets/Gallery/Gifs';
import RightArrow from '../../Assets/right.svg';
import LeftArrow from '../../Assets/left.svg';
import { useState, useEffect, useRef } from 'react';

export const Home = () => {
	// const [sliderCount, setSliderCount] = useState(0);

	// setInterval(() => {
	// 	setSliderCount((sliderCount) => sliderCount + 1);
	// }, 1000000	);

	return (
		<div className='gifs-section-container'>
			<div className='gifs-container'>
				{gifs.map(({ name, url }) => (
					<img
						className='home-gif'
						key={url}
						src={url}
						alt={name}
					/>
				))}
			</div>
			{/* <div className='controls'>
				<img
					src={LeftArrow}
					alt='Flecha de paginación izquierda'
				/>
				<img
					src={RightArrow}
					alt='Flecha de paginación derecha'
				/>
			</div> */}
		</div>
	);
};

export default Home;
