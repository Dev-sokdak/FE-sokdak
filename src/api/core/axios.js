import axios from "axios";

// 인스턴스 생성
export const instance = axios.create({
  baseURL : "http://54.180.86.147:80",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 요청 타임아웃
instance.defaults.timeout = 2500;

//인스턴스 request header Authorization 설정
// TODO - localStorage 방식 미확정
instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});