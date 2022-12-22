import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useRootStore } from '../../hooks/useRootStore';
import { Contacs } from '../Contacts/Contacs';
import { Header } from '../Header/Header';
import { LoginPage } from '../LoginPage/LoginPage';
import { NewContact } from '../NewContact/NewContact';

export const MainPage = observer(() => {
	const rootStore = useRootStore();

	const router = createBrowserRouter([
		{
			path: '/login',
			element: <LoginPage />,
		},
		{
			path: '/',
			element: <Contacs contacts={rootStore.contacts} />,
		},
		{
			path: '/newContact',
			element: <NewContact />,
		},
	]);

	return (
		<div className='container min-h-full h-screen w-screen min-w-full bg-sky-100'>
			<Header isAuth={rootStore.isAuth} />
			<RouterProvider router={router} />
		</div>
	);
});
