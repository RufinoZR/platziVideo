import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// actions
import { loginRequest } from '../redux/actions';

// components
import Header from '@components/Header';

// icons
import googleIcon from '@icons/google-icon.png';
import twitterIcon from '@icons/twitter-icon.png'

// styles
import '@styles/components/Login.sass';

const Login = props => {
	const [form, setValues] = useState({
		email: ''
	});

	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = event => {
		event.preventDefault();
		console.log(form);
		props.loginRequest(form);
		props.history.push('/');
	}

	return (
		<>
			<Header isLogin />
			<section className="login">
				<section className="login__container">
					<h2 tabIndex="0">Inicia sesión</h2>
					<form className="login__container--form" onSubmit={handleSubmit}>
						<input
							name="email"
							aria-label="Correo"
							className="input"
							type="text"
							placeholder="Correo"
							onChange={handleInput}
						/>
						<input
							name="password"
							aria-label="Contraseña"
							className="input"
							type="password"
							placeholder="Contraseña"
							onChange={handleInput}
						/>
						<button className="button">Iniciar sesión</button>
						<div className="login__container--remember-me">
							<label>
								<input
									type="checkbox"
									name=""
									id="cbox1"
									value="checkbos"
								/> Recuérdame
							</label>
							<a href="/">Olvidé mi contraseña</a>
						</div>
					</form>
					<section className="login__container--social-media">
						<div>
							<img src={googleIcon} alt="Google"/>
							Inicia sesión con Google
						</div>
						<div>
							<img src={twitterIcon} alt="twitter"/>
							Inicia sesión con Twitter
						</div>
					</section>
					<p className="login__container--register">No tienes ninguna cuenta
						<Link to="/register"> Regístrate</Link>
					</p>
				</section>
			</section>
		</>
	)
};


const mapDispatchToProps = {
	loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);
