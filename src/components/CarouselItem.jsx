import React from 'react';
import  PropTypes from 'prop-types';

// styles
import '@styles/components/CarouselItem.sass'

// assets
import play from '@icons/play-icon.png';
import plus from '@icons/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
	<div className="carousel-item">
		<img
			className="carousel-item__img"
			src={cover}
			alt={title} />
		<div className="carousel-item__details">
			<div>
				<img className="carousel-item__details--img" src={play} alt="play" />
				<img className="carousel-item__details--img" src={plus} alt="agregar" />
			</div>
			<p className="carousel-item__details--title">{title}</p>
			<p className="carousel-item__details--subtitle">
				{`${year} ${contentRating} ${duration}`}
			</p>
		</div>
	</div>
);

CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number
};

export default CarouselItem;
