import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createNewChatRoom } from '../chat/chatSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function NewRoomFormDialog() {
	const dispatch = useDispatch();
	const { user } = useAuth0();
	const [openDialog, setOpenDialog] = useState(false);
	const [roomName, setRoomName] = useState('');

	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const handleCreateNewChatRoom = async () => {
		const author = user?.name;
		const avatar = user?.picture;
		const nickname = user?.nickname;
		const isRoomCreated = await dispatch(
			createNewChatRoom({ roomName, author, nickname, avatar }),
		);

		if (isRoomCreated) setOpenDialog(false);
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				New room
			</Button>
			<Dialog open={openDialog} onClose={handleCloseDialog}>
				<DialogTitle>Create a new room</DialogTitle>
				<DialogContent>
					<DialogContentText>
						If you did not find any room to chat with your friends, create a new
						one!
					</DialogContentText>
					<TextField
						onChange={(e) => setRoomName(e.target.value)}
						autoFocus
						margin="dense"
						id="name"
						label="Enter a room name"
						type="email"
						fullWidth
						variant="standard"
						required
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button onClick={handleCreateNewChatRoom}>Create</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
