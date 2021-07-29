import React from 'react';

// redux
import { connect } from 'react-redux';

// hooks
// import useInitialState from '@hooks/useInitialState';

// components
import Header from '@components/Header';
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';

// api
// const API = 'http://localhost:3000/initalState';

// styles
import '@styles/App.sass';

const Home = ({ myList, trends, originals }) => {
	// const initialState = useInitialState(API);

	return	(
		<>
			<Header />
			<Search isHome />
			{
				myList.length > 0 &&
				<Categories title="Mi Lista">
					<Carousel>
						{myList.map(item =>
							<CarouselItem
								key={item.id}
								{...item}
								isList
							/>
						)}
					</Carousel>
				</Categories>
			}
			<Categories title="Tendencias">
				<Carousel>
					{trends.map(item =>
						<CarouselItem key={item.id} {...item}/>
					)}
				</Carousel>
			</Categories>
			<Categories title="Originales de Platzi Video">
				<Carousel>
					{originals.map(item =>
						<CarouselItem key={item.id} {...item}/>
					)}
				</Carousel>
			</Categories>
		</>
	)
};

const mapStateToProps = (state) => ({
	myList: state.myList,
	trends: state.trends,
	originals: state.originals,
});

export default connect(mapStateToProps)(Home);

