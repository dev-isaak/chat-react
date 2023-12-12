import { useLoaderData } from 'react-router-dom';
import type { ChatMessageType } from './chatTypes';
import { Paper, Typography, Box, Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrentChatsToList } from './chatSlice';
import { useEffect } from 'react';

export default function ChatList() {
	const chatContent = useLoaderData() as ChatMessageType[];
	const chats = useSelector((state) => state.rooms.chats);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addCurrentChatsToList(chatContent));
	}, [chatContent]);

	return (
		<div>
			{chats.length > 0 ? (
				<>
					{chats.map((chat, index) => {
						return (
							<Paper
								key={index}
								sx={{
									width: '400px',
									display: 'flex',
									flexWrap: 'wrap',
									padding: '.5em',
									margin: '.5em',
									bgcolor: 'lightblue',
									borderRadius: '25px',
									justifyItems: 'right',
								}}
							>
								<Avatar src={chat.author_avatar} sx={{ marginRight: '1em' }} />
								<Typography variant="body1">{chat.message}</Typography>
								<Box sx={{ width: '100%', textAlign: 'end', marginTop: '1em' }}>
									<Typography variant="body2">{chat.timeStamp}</Typography>
								</Box>
							</Paper>
						);
					})}
				</>
			) : (
				<div>
					<h1>El chat está vacío</h1>
				</div>
			)}
		</div>
	);
}
