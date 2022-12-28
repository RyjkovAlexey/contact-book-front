import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { useRootStore } from '../../hooks/useRootStore';
import { NewUser } from '../../interfaces/NewUser';
import { Modal } from '../ui/Modal/Modal';
import './register-modal.css';

export const RegisterModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
	const rootStore = useRootStore();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [patronymic, setPatronymic] = useState('');

	const usernameOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};
	const passwordOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};
	const nameOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};
	const surnameOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSurname(event.target.value);
	};
	const patornymicOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPatronymic(event.target.value);
	};

	const registerOnClick = () => {
		const newUser: NewUser = {
			username,
			password,
			name,
			surname,
			patronymic,
		};

		rootStore.register(newUser);

		onClose();

		return redirect('/');
	};

	return (
		<Modal
			show={show}
			onClose={onClose}
			child={
				<div className='register-modal'>
					<label>Регистрация</label>
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
					<input onInput={nameOnInput} value={name} type='text' placeholder='Введите ваше имя' />
					<input
						onInput={surnameOnInput}
						value={surname}
						type='text'
						placeholder='Введите вашу фамилию'
					/>
					<input
						onInput={patornymicOnInput}
						value={patronymic}
						type='text'
						placeholder='Введите ваше отчество'
					/>
					<button onClick={registerOnClick}>Регистрация</button>
				</div>
			}
		/>
	);
};
