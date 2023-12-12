import SendIcon from '@mui/icons-material/Send';
import { Grid, InputBase, IconButton, Paper } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { chatNewMessage, postMessage } from './chatSlice';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';

export default function SendMessage() {
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();
	const { user } = useAuth0();
	const { pathname } = useLocation();

	const handleSendMessage = async () => {
		// Get de room ID from URL
		const regex = /\/rooms\/(.+)/;
		const result = pathname.match(regex);
		const roomId = result[1];

		const userName = user?.name;
		const userAvatar = user?.picture;
		const userNickName = user?.nickname;
		const messageIsPosted = await dispatch(
			chatNewMessage({ message, roomId, userName, userAvatar, userNickName }),
		);
		if (messageIsPosted) {
			setMessage('');
		}
	};
	return (
		<Grid item xs={12} sx={{ padding: '1em' }}>
			<Paper sx={{ padding: '1em' }}>
				<InputBase
					placeholder="Wanna say something?"
					sx={{ width: '95%' }}
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>
				<IconButton type="button" onClick={handleSendMessage}>
					<SendIcon />
				</IconButton>
			</Paper>
		</Grid>
	);
}
