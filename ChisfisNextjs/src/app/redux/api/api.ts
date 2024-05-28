"use client";
import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('auth-token');
const fetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

fetch.defaults.headers['Content-Type'] = 'application/json';

const basicFetch = axios.create();

basicFetch.defaults.headers['Content-Type'] = 'application/json';

fetch.interceptors.request.use(function interceptor(config) {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { fetch };