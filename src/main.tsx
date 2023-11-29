import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import Layout from './layouts/Layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeView from './views/HomeView.tsx';
import LoginView from './views/LoginView.tsx';
import ChatRoomView from './views/ChatRoomView.tsx';
import Page404 from './Page404.tsx';
import UserSettingsView from './views/UserSettingsView.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeView />,
		errorElement: <Page404 />,
	},
	{
		path: '/login',
		element: <LoginView />,
	},
	{
		path: '/chat',
		element: <ChatRoomView />,
	},
	{
		path: '/user-settings',
		element: <UserSettingsView />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<React.StrictMode>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
		</React.StrictMode>
	</Provider>,
);
