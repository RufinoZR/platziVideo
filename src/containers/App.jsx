import React from 'react';

// components
import Header from '@components/Header';
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
import Footer from "@components/Footer";

// styles
import '@styles/App.sass';

const App = () => (
	<div className="App">
		<Header />
		<Search />
		<Categories>
			<Carousel>
				<CarouselItem />
				<CarouselItem />
				<CarouselItem />
				<CarouselItem />
				<CarouselItem />
			</Carousel>
		</Categories>
		<Footer />
	</div>
);

export default App;

