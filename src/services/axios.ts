import axios, { AxiosError, AxiosInstance } from 'axios';
import { parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
import { AuthTokenError } from './errors/AuthTokenError';

export function setupAPIClient(ctx = undefined): AxiosInstance {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `${cookies['@btr-imoveis:token']}`,
    },
  });

  api.interceptors.response.use((response) => response, async (error: AxiosError) => {
    if (error.response.status === 401) {
      if (process.browser) {
        destroyCookie(undefined, '@btr-imoveis:token', {
          path: '/',
        });
        destroyCookie(undefined, '@btr-imoveis:user', {
          path: '/',
        });
        Router.push('/admin/login');
      } else {
        Promise.reject(new AuthTokenError());
      }
    }

    return Promise.reject(error);
  });

  return api;
}
