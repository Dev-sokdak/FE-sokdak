import { instance } from './core/axios';

// 일반 로그인
// auth: { userId, password }
const Login = async (auth) => {
  try {
    const response = await instance.post("/api/user/login", auth);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
}

// 회원가입
// auth: { userId, password, jobTag(optional), careerTag(optional) }
const SignUp = async (auth) => {
  try {
    const response = await instance.post("/api/user/signup", auth);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
}

// 카카오 로그인
// code: 카카오 인증 코드
const KakaoLogin = async (code) => {
  try {
    const response = await instance.post(`/api/user/loginKakao?code=${code}`);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
}

const emailValidCheck = async (email) => {
  try {
    const response = await instance.get(`/api/user/signup/checkId/${email}`);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
}

const authAPI = {
  Login,
  SignUp,
  KakaoLogin,
  emailValidCheck,
};

export default authAPI;
