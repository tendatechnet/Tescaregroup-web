/**
 * Authentication utility functions
 * Uses localStorage for simple token-based authentication
 */

const AUTH_TOKEN_KEY = 'tes_admin_token';
const AUTH_USER_KEY = 'tes_admin_user';

// Simple admin credentials (in production, this should be handled by backend)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'TESCare2024!', // Change this to a secure password
};

/**
 * Authenticate user with credentials
 * @param {string} username - Username
 * @param {string} password - Password
 * @returns {boolean} True if authentication successful
 */
export const login = (username, password) => {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    const token = generateToken();
    const user = {
      username,
      role: 'admin',
      loginTime: Date.now(),
    };
    
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    return true;
  }
  return false;
};

/**
 * Logout user and clear auth data
 */
export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if user is authenticated
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const userStr = localStorage.getItem(AUTH_USER_KEY);
  
  if (!token || !userStr) {
    return false;
  }
  
  try {
    const user = JSON.parse(userStr);
    // Check if token is still valid (24 hours)
    const tokenAge = Date.now() - user.loginTime;
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (tokenAge > twentyFourHours) {
      logout();
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
};

/**
 * Get current user info
 * @returns {Object|null} User object or null
 */
export const getCurrentUser = () => {
  const userStr = localStorage.getItem(AUTH_USER_KEY);
  if (!userStr) {
    return null;
  }
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

/**
 * Generate a simple token (in production, use JWT from backend)
 * @returns {string} Generated token
 */
const generateToken = () => {
  return `tes_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get auth token
 * @returns {string|null} Auth token or null
 */
export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

/**
 * Get current user token (alias for getToken for backward compatibility)
 * @returns {string|null} Auth token or null
 */
export const getAuthToken = () => {
  return getToken();
};

/**
 * Set authentication token
 * @param {string} token - Auth token
 */
export const setAuthToken = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

/**
 * Remove authentication token
 */
export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
};
