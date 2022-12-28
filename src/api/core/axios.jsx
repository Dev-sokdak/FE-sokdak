import axios from 'axios';
import { getCookie } from '../../utils/cookies';
import useToast from '../../hooks/useToast';

// 인스턴스 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

// 요청 타임아웃
instance.defaults.timeout = 2500;

//인스턴스 request header Authorization 설정
instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = getCookie();
  config.headers['Authorization'] = `${token}`;
  return config;
});

// Unauthorized Error 처리
axios.interceptors.response.use((error) => {
  if (error.response.status === 401) {
    useToast('로그인이 만료되었습니다.', 'error');
    window.location.href('/login');
  }
});
