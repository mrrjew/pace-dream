import axios, { AxiosInstance } from 'axios';

export const serverAuthAxios = (): AxiosInstance => {
  const token = getAuthTokenFromCookie();
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getAuthTokenFromCookie = (): string | null => {
  const cookieHeader = document.cookie;
  const cookies: { [key: string]: string } = cookieHeader
    ? cookieHeader.split(';').reduce((prev: { [key: string]: string }, current) => {
      const [name, value] = current.trim().split('=');
      prev[name] = value;
      return prev;
    }, {})
    : {};
  return cookies['auth-token'] || null;
};
