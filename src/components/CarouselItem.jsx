import React from 'react';

// styles
import '@styles/components/CarouselItem.sass'

const CarouselItem = () => (
	<div className="carousel-item">
		<img
			className="carousel-item__img"
			src="https://images.pexels.com/photos/1645822/pexels-photo-1645822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
			alt="" />
		<div className="carousel-item__details">
			<div>
				<img src="./assets/icons/play-icon.png" alt="play" />
				<img src="./assets/icons/plus-icon.png" alt="agregar" />
			</div>
		</div>
		<p className="carousel-item__details--title">Título descriptivo</p>
		<p className="carousel-item__details--subtitle">2019 16+ 144 minutos</p>
	</div>
);

export default CarouselItem;
