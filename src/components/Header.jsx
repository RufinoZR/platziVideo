import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// redux
import { connect } from 'react-redux';

// actions
import { logoutRequest } from '../redux/actions';

// utils
import gravatar from '@utils/gravatar'

// styles
import '@styles/components/Header.sass';

// assets
import logoPlatzi from '@images/logo-platzi.png';
import userIcon from '@images/user-icon.png';

const Header = props => {
	const { user, isLogin, isRegister } = props;
	const hasUser = !!user.email;
	const userImage = hasUser ? gravatar(user.email) : userIcon;

	const handleLogout = () => {
		props.logoutRequest({});
	}

	const headerClass = classNames('header', {
		isLogin,
		isRegister,
	});

	return (
		<header className={headerClass}>
			<Link to="/">
				<img tabIndex="0" className="header__img" src={logoPlatzi} alt="logo platzi video"/>
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					<img src={userImage} alt="imagen del usuario"/>
					<p>Perfil</p>
				</div>
				<ul>
					{hasUser &&
					<li>
						<Link to="/">{ user.name }</Link>
					</li>
					}
					<li>
						{hasUser ?
							<Link to="/login" onClick={handleLogout}>Cerrar Sesión</Link> :
							<Link to="/login">Iniciar Sesión</Link>
						}
					</li>
				</ul>
			</div>
		</header>
	)
};

const mapStateToProps = state => ({
	user: state.user
});

const mapDispatchToProps = {
	logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
