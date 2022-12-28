import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { useRootStore } from '../../hooks/useRootStore';
import { NewUser } from '../../interfaces/NewUser';
import { Modal } from '../ui/Modal/Modal';
import './login-modal.css';

export const LoginModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
	const rootStore = useRootStore();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const usernameOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};
	const passwordOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const loginOnClick = () => {
		rootStore.login(username, password);

		onClose();
	};

	return (
		<Modal
			show={show}
			onClose={onClose}
			child={
				<div className='login-modal'>
					<label>Вход</label>
					<input
						onInput={usernameOnInput}
						value={username}
						type='text'
						placeholder='Введите ваш логин'
					/>
					<input
						onInput={passwordOnInput}
						value={password}
						type='password'
						placeholder='Введите ваш пароль'
					/>
					<button onClick={loginOnClick}>Войти</button>
				</div>
			}
		/>
	);
};
