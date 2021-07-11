import React from 'react';

// styles
import '@styles/components/Carousel.sass'

const Carousel = ({ children }) => (
	<section className="carousel">
		<div className="carousel__container">
			{children}
		</div>
	</section>
);

export default Carousel;
