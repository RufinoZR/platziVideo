import React from 'react';

// styles
import '@styles/components/Header.sass';

const Header = () => (
	<header>
		<img tabIndex="0" className="header__img" src="./assets/logo-platzi.png" alt="logo platzi video" />
		<div className="header__menu">
			<div className="header__menu--profile">
				<img src="./assets/user-icon.png" alt="imagen del usuario"/>
				<p>Perfil</p>
			</div>
			<ul>
				<li>
					<a href="/">Cuenta</a>
				</li>
				<li>
					<a href="/">Cerrar Sesión</a>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
