import React from 'react';

// styles
import '@styles/components/Header.sass';

// assets
import logoPlatzi from '@images/logo-platzi.png';
import userIcon from '@images/user-icon.png';

const Header = () => (
	<header>
		<img tabIndex="0" className="header__img" src={logoPlatzi} alt="logo platzi video" />
		<div className="header__menu">
			<div className="header__menu--profile">
				<img src={userIcon} alt="imagen del usuario"/>
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
