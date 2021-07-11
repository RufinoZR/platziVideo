import React from 'react';

// styles
import '@styles/components/Search.sass'

const Search = () => (
	<main>
		<h2 className="main__title">¿Qué quieres ver hoy?</h2>
		<input className="input" type="text" placeholder="Buscar..." />
	</main>
);

export default Search;
