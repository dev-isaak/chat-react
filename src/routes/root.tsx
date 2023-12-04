import { Outlet } from 'react-router-dom';
import Navbar from '../features/navbar/Navbar';

export default function Root() {
	return (
		<div>
			<Navbar />
			<div>
				<Outlet />
			</div>
		</div>
	);
}
