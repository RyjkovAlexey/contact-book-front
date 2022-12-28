import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContactsPage } from './components/ContactsPage/ContactsPage';
import { MainPage } from './components/MainPage';
import { RootStore } from './stores/RootStore';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const rootStore = new RootStore();

export const RootContext = createContext<RootStore>(rootStore);

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		children: [
			{
				path: '/contacts',
				element: <ContactsPage />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<RootContext.Provider value={rootStore}>
			<RouterProvider router={router} />
		</RootContext.Provider>
	</React.StrictMode>,
);
