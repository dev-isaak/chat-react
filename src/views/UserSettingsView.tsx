import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Container, Grid } from '@mui/material';

export default function UserSettingsView() {
	const { user } = useAuth0();

	return (
		<Container>
			<h1>User settings</h1>
			<Grid container spacing={2}>
				<Grid item xs={12} md={2}>
					<Avatar
						sx={{ width: '100px', height: '100px' }}
						src={user?.picture}
					/>
				</Grid>
				<Grid item>
					<Container
						sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
					>
						<h3>Nickname</h3>
						<p>{user?.nickname || 'Empty'}</p>
						<h3>User Name</h3>
						<p>{user?.name || 'Empty'}</p>
						<h3>Email</h3>
						<p> {user?.email || 'Empty'}</p>
						<h3>Phone Number</h3>
						<p>{user?.phone_number || 'Empty'}</p>
						<h3>Birthdate</h3>
						<p>{user?.birthdate || 'Empty'}</p>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
}
