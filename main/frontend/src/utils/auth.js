import { jwtDecode } from 'jwt-decode';

export const getUsernameFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.username; // adjust this based on your token structure
  } catch (err) {
    return null;
  }
};


export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
};
