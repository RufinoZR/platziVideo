import React from 'react';

// styles
import '@styles/components/Categories.sass';

const Categories = ({ children, title }) => (
	<div className="categories">
		<h2 className="categories__title">{title}</h2>
		{children}
	</div>
);

export default Categories;
