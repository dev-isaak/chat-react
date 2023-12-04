import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomeView from './views/HomeView.tsx';
import LoginView from './views/LoginView.tsx';
import ChatRoomView from './views/ChatRoomView.tsx';
import Page404 from './Page404.tsx';
import UserSettingsView from './views/UserSettingsView.tsx';
import Root from './routes/root.tsx';
import LogoutView from './views/LogoutView.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Page404 />,
		children: [
			{
				path: 'login',
				element: <LoginView />,
			},
			{
				path: 'chat',
				element: <ChatRoomView />,
			},
			{
				path: 'user-settings',
				element: <UserSettingsView />,
			},
			{
				path: 'logout',
				element: <LogoutView />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>,
);
