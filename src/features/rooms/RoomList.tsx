import { useDispatch, useSelector } from 'react-redux';
import { fetchChatRooms } from '../chat/chatSlice';
import { useEffect } from 'react';
import { List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import { RootState } from '../../redux/store';
import { NavLink } from 'react-router-dom';
import './assests/roomStyles.css';

export default function RoomList() {
	const dispatch = useDispatch();
	const roomsList = useSelector((state: RootState) => state.rooms.roomsList);

	const fetchRooms = () => {
		dispatch(fetchChatRooms());
	};

	useEffect(() => {
		fetchRooms();
	}, []);

	if (!roomsList) {
		return (
			<Box sx={{ textAlign: 'center', margin: '.5em' }}>
				<h2>No data available.</h2>
			</Box>
		);
	}

	return (
		<Box sx={{ height: '80vh', overflowY: 'scroll', overflowX: 'hidden' }}>
			<Box sx={{ textAlign: 'center', margin: '.5em' }}>
				<h2>Rooms</h2>
			</Box>
			<Divider />
			{roomsList.map((room, index) => {
				return (
					<List key={index} disablePadding>
						<ListItem className="nav-link">
							<NavLink
								to={room._id}
								className={({ isActive, isPending }) =>
									isActive ? 'active' : isPending ? 'pending' : ''
								}
							>
								<ListItemText primary={room.room_name} />
							</NavLink>
						</ListItem>
					</List>
				);
			})}
		</Box>
	);
}
