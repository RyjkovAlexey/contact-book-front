import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink, redirect, useNavigate } from 'react-router-dom';

export const Header = observer(({ isAuth }: { isAuth: boolean }) => {
	return (
		<header className='container w-screen min-w-full h-12 bg-sky-100 flex drop-shadow-md'>
			<a href='/login' className='container my-auto ml-auto mr-5 w-max'>
				{!isAuth && (
					<button className='bg-white h-fit p-1 outline-none rounded-md'>Войти в систему</button>
				)}
			</a>
		</header>
	);
});
