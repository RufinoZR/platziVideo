import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// actions
import { registerRequest } from '../redux/actions';

// components
import Header from '@components/Header';

// styles
import '@styles/components/Register.sass';

const Register = props => {
	const [form, setValues] = useState({
		email: '',
		name: '',
		password: ''
	});

	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit  = event => {
		event.preventDefault();
		console.log(form);
		props.registerRequest(form);
		props.history.push('/');
	}

	return (
		<>
			<Header isRegister />
			<section className="register">
				<section className="register__container">
					<h2 tabIndex="0">Regístrate</h2>
					<form className="register__container--form" onSubmit={handleSubmit}>
						<input
							name="name"
							aria-label="Nombre"
							className="input"
							type="text"
							placeholder="Nombre"
							onChange={handleInput}
						/>
						<input
							name="email"
							aria-label="Correo"
							className="input"
							type="email"
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
						<button className="button">Registrarme</button>
					</form>
					<p className="register__container--sesion">
						<Link to="/login">
							Iniciar sesión
						</Link>
					</p>
				</section>
			</section>
		</>
	)
};

const mapDispatchToProps = {
	registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);
