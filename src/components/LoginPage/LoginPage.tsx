import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';
import { useRootStore } from '../../hooks/useRootStore';

export const LoginPage = observer(() => {
	const navigate = useNavigate();

	const rootStore = useRootStore();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const changeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(event.target.value);
	};

	const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const onClick = () => {
		rootStore.login(login, password);
		return navigate('/');
	};

	return (
		<form className='container w-1/2 center h-1/5 min-w-1/2 mx-auto grid grid-flow-row gap-5'>
			<p className='mx-auto font-bold'>Войти</p>

			<input
				className={'w-1/2 mx-auto'}
				value={login}
				onChange={changeLogin}
				placeholder={'Введите логин'}
			/>

			<input
				className={'w-1/2 mx-auto'}
				value={password}
				onChange={changePassword}
				placeholder={'Введите пароль'}
				type={'password'}
			/>

			<button className={'bg-cyan-200 w-1/2 mx-auto'} onClick={onClick}>
				Войти
			</button>
		</form>
	);
});
