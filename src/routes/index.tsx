import { useAuth0 } from '@auth0/auth0-react';

export default function Index() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return isAuthenticated ? (
		<div>
			<h3>Welcome back {user?.name}!</h3>
			<p>Go to Chats to start chating or settings to configure your account.</p>
		</div>
	) : (
		<div>
			<h3>Dear guest, Login or register to start chating!</h3>
		</div>
	);
}
