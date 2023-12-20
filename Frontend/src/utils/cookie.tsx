import Cookies from 'js-cookie';

export const isAuthCookieAvailable = () => {
  const authCookie = Cookies.get('auth');
  return authCookie === 'nfh6fgaWdj';
};
