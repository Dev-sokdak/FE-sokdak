import axios from "axios";
import { getCookie } from "../../utils/cookies";

// 인스턴스 생성
export const instance = axios.create({
  baseURL : " https://devsokdak.shop",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 요청 타임아웃
instance.defaults.timeout = 2500;

//인스턴스 request header Authorization 설정
instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = getCookie();
  config.headers["Authorization"] = `${token}`;
  return config;
});