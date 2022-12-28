import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useRootStore } from '../hooks/useRootStore';
import { AppBar } from './AppBar/AppBar';
import { LoginModal } from './LoginModal/LoginModa';
import './main-page.css';
import { RegisterModal } from './RegisterModal/RegisterModal';

export const MainPage = observer(() => {
	const rootStore = useRootStore();

	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowReginster] = useState(false);

	const showModalLogin = () => {
		setShowLogin(true);
	};

	const showModalRegister = () => {
		setShowReginster(true);
	};

	return (
		<>
			<div className='app'>
				<AppBar showModalLogin={showModalLogin} showModalRegister={showModalRegister} />
				<Outlet />
				<RegisterModal show={showRegister} onClose={() => setShowReginster(false)} />
				<LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
			</div>
		</>
	);
});
