import Navbar from '../features/navbar/Navbar';
import { LayoutProps } from './types';

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	);
}
