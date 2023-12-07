import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProtectedRoute({ children, redirectTo = '/' }) {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <CircularProgress />;
	}

	if (!isAuthenticated) {
		return <Navigate to={redirectTo} replace />;
	}

	return children;
}
