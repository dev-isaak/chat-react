import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChatRoomView from './views/ChatRoomView.tsx';
import Page404 from './Page404.tsx';
import UserSettingsView from './views/UserSettingsView.tsx';
import Root from './routes/root.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import Index from './routes/index.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import { themeOptions } from './theme.ts';
import { ThemeProvider } from '@emotion/react';
import './global.css';
import ChatList from './features/chat/ChatList.tsx';
import IndexChat from './features/chat/IndexChat.tsx';
import { chatLoader } from './features/chat/chatLayout.loader.ts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Page404 />,
		children: [
			{ index: true, element: <Index /> },
			{
				path: 'rooms',
				element: <ChatRoomView />,
				children: [
					{ index: true, element: <IndexChat /> },
					{
						path: '/rooms/:roomId',
						element: <ChatList />,
						loader: chatLoader,
					},
				],
			},
			{
				path: 'user-settings',
				element: (
					<ProtectedRoute>
						<UserSettingsView />
					</ProtectedRoute>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Auth0Provider
		domain="dev-uwvo44tgkoe8c25m.us.auth0.com"
		clientId="0VfRC1AA28BkLb0QiO2yunLbZWLZ3RIP"
		authorizationParams={{
			redirect_uri: 'http://localhost:5173/chat', // The URL to where you'd like to redirect your users after they authenticate with Auth0.
		}}
		useRefreshTokens={true}
		cacheLocation={'localstorage'}
	>
		<Provider store={store}>
			<React.StrictMode>
				<ThemeProvider theme={themeOptions}>
					<RouterProvider router={router} />
				</ThemeProvider>
			</React.StrictMode>
		</Provider>
	</Auth0Provider>,
);
