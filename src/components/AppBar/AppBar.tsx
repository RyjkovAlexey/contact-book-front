import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRootStore } from '../../hooks/useRootStore';
import { NavLinkButton } from '../ui/NavLinkButton/NavLinkButton';
import './app-bar.css';

export const AppBar = observer(
	({
		showModalLogin,
		showModalRegister,
	}: {
		showModalLogin: () => void;
		showModalRegister: () => void;
	}) => {
		const { isAuth } = useRootStore();
		return (
			<header>
				{isAuth && (
					<div className='control_btns'>
						<NavLinkButton to='/contacts' value='Список контактов' />
						<NavLinkButton to='/users' value='Пользователи' />
					</div>
				)}
				{!isAuth && (
					<div className='auth_btns'>
						<button onClick={showModalRegister}>Регистрация</button>
						<button onClick={showModalLogin}>Вход</button>
					</div>
				)}
			</header>
		);
	},
);
