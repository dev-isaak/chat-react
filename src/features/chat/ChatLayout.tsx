import { Box, Grid } from '@mui/material';
import RoomList from '../rooms/RoomList';
import NewRoomFormDialog from '../rooms/NewRoomFormDialog';
import './assets/chatStyles.css';
import { Outlet } from 'react-router-dom';
import SendMessage from './SendMessage';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function ChatLayout() {
	const chat = useSelector((state) => state.rooms.chats);
	const windowToBottom = useRef(null);

	useEffect(() => {
		windowToBottom.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, [chat]);

	return (
		<div>
			<Grid container sx={{ height: '80vh' }}>
				<Grid item className="room-list-container" sm={2}>
					<RoomList />
					<Box className="button-box">
						<NewRoomFormDialog />
					</Box>
				</Grid>
				<Grid item sx={{ position: 'relative' }} xs={10}>
					<Grid container>
						<Grid
							ref={windowToBottom}
							item
							xs={12}
							sx={{
								height: '70vh',
								display: 'flex',
								padding: '1em',
								overflowY: 'scroll',
								scrollBehavior: 'smooth',
							}}
						>
							<Outlet />
						</Grid>
						<SendMessage />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
