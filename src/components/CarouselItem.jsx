import React from 'react';
import  PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// actions
import { setFavorite, deleteFavorite } from "../redux/actions";

// styles
import '@styles/components/CarouselItem.sass'

// assets
import play from '@icons/play-icon.png';
import plus from '@icons/plus-icon.png';
import removeIcon from '@icons/remove-icon.png';

const CarouselItem = (props) => {
	const { id, cover, title, year, contentRating, duration, isList } = props;
	const handleSetFavorite = () => {
		props.setFavorite({
			id, cover, title, year, contentRating, duration
		});
	}

	const handleDeleteFavorite = () => {
		props.deleteFavorite(id);
	}

	return (
		<div className="carousel-item">
			<img
				className="carousel-item__img"
				src={cover}
				alt={title}
			/>
			<div className="carousel-item__details">
				<div>
					<Link to={`/player/${id}`}>
						<img
							className="carousel-item__details--img"
							src={play}
							alt="play"
						/>
					</Link>
					{isList ?
						<img
							className="carousel-item__details--img"
							src={removeIcon}
							alt="Eliminar"
							onClick={handleDeleteFavorite}
						/> :
						<img
							className="carousel-item__details--img"
							src={plus}
							alt="agregar"
							onClick={handleSetFavorite}
						/>
					}
				</div>
				<p className="carousel-item__details--title">{title}</p>
				<p className="carousel-item__details--subtitle">
					{`${year} ${contentRating} ${duration}`}
				</p>
			</div>
		</div>
	)
};

CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number
};

const mapDispatchToProps = {
	setFavorite,
	deleteFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItem);
