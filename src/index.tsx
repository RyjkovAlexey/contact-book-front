import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { RootStore } from './stores/RootStore';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const rootStore = new RootStore();

export const RootContext = createContext<RootStore>(rootStore);

root.render(
	<React.StrictMode>
		<RootContext.Provider value={rootStore}>
			<MainPage />
		</RootContext.Provider>
	</React.StrictMode>,
);
