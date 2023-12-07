import {
	Box,
	Button,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	InputBase,
	IconButton,
	Paper,
} from '@mui/material';
import Chat from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';

const chatList = [
	{
		id: 1,
		name: 'Chat 1',
		icon: <Chat />,
		path: '/chat/chat1',
	},
	{
		id: 2,
		name: 'Chat 2',
		icon: <Chat />,
		path: '/chat/chat2',
	},
	{
		id: 3,
		name: 'Chat 3',
		icon: <Chat />,
		path: '/chat/chat3',
	},
];

export default function ChatLayout() {
	return (
		<div>
			<Grid container sx={{ height: '80vh' }}>
				<Grid
					item
					sx={{
						position: 'relative',
						bgcolor: '#f5f5f5',
					}}
					sm={2}
				>
					{chatList.map((item) => {
						return (
							<List key={item.id} disablePadding>
								<ListItem>
									<ListItemButton>
										<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText primary={item.name} />
									</ListItemButton>
								</ListItem>
							</List>
						);
					})}
					<Box
						sx={{
							width: '100%',
							position: 'absolute',
							bottom: '0',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Button>New chat</Button>
					</Box>
				</Grid>
				<Grid item sx={{ position: 'relative' }} xs={10}>
					<Grid container>
						<Grid item xs={12} sx={{ height: '70vh', padding: '1em' }}>
							Aquí el chat
						</Grid>
						<Grid item xs={12} sx={{ padding: '1em' }}>
							<Paper sx={{ padding: '1em' }}>
								<InputBase
									placeholder="Wanna say something?"
									sx={{ width: '95%' }}
								/>
								<IconButton type="button">
									<SendIcon />
								</IconButton>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
