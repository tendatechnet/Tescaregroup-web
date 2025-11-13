import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

/**
 * AuthGuard component - Protects routes that require authentication
 * Redirects to login page if user is not authenticated
 */
const AuthGuard = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            // Redirect to login page if not authenticated
            navigate('/login', { replace: true });
        }
    }, [navigate]);

    // Only render children if authenticated
    if (!isAuthenticated()) {
        return null;
    }

    return <>{children}</>;
};

export default AuthGuard;