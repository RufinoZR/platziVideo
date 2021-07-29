import React, { useLayoutEffect } from 'react';

// redux
import { connect } from 'react-redux';

// actions
import { getVideoSource } from '../redux/actions';

// components
import NotFound from './NotFound';

// style
import '@styles/components/Player.sass';

const Player = props => {
	const { id } = props.match.params;
	const hasPlaying = props.playing.id;

	useLayoutEffect(() => {
		props.getVideoSource(id);
	}, [])

	return hasPlaying ? (
		<div className="Player">
			<video controls autoPlay>
				<source src={props.playing.source} type="video/mp4" />
			</video>
			<div className="Player-back">
				<button type="button" onClick={ () => props.history.goBack() }>
					Regresar
				</button>
			</div>
		</div>
	) : <NotFound />
};

const mapStateToProps = state => ({ playing: state.playing });

const mapDispatchToProps = {
	getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
