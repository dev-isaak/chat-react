import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/material';
import './assets/chatRoomStyles.css';
import ChatLayout from '../features/chat/ChatLayout';

export default function ChatRoomView() {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className="progress-container">
				<CircularProgress />
			</div>
		);
	}

	return isAuthenticated ? (
		<div>
			<ChatLayout />
		</div>
	) : (
		<div>
			<h1>CHATS</h1>
			<h2>Chat list without permissions</h2>
		</div>
	);
}
