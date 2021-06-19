import axios, { AxiosError } from 'axios';
import { parseCookies, destroyCookie } from 'nookies';
import { AuthTokenError } from './errors/AuthTokenError';
import Router from 'next/router';

export function setupAPIClient(ctx = undefined) {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `${cookies['@btr-imoveis:token']}`
    }
  });
  
  api.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError) => {
      if(error.response.status === 401) {
        if(process.browser) {
          destroyCookie(undefined, '@btr-imoveis:token');
          destroyCookie(undefined, '@btr-imoveis:user');
          Router.push('/admin/login');
        } else {
          Promise.reject(new AuthTokenError())
        }
      }
  
      return Promise.reject(error);
  })
  
  return api;
}