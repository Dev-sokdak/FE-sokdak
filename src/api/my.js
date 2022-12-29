import useToast from '../hooks/useToast';
import { instance } from './core/axios';

// 마이페이지 정보 받기
const getMyInfo = async () => {
  try {
    const response = await instance.get('/api/mypage');
    return response;
  } catch (error) {
    useToast('로그인 후 이용해주세요', 'warning');
  }
};

// 내 태그 설정
// tags : { jobTag, careerTag }
const setMyJobTag = async (tags) => {
  try {
    const response = await instance.patch('/api/mypage/jobTag', tags);
    return response;
  } catch (error) {
    useToast('에러가 발생했습니다', 'error');
  }
};

// 내 프로필 사진 설정
// form-data
const setMyProfileImg = async (img) => {
  try {
    const response = await instance.patch('/api/mypage/profile', img);
    return response;
  } catch (error) {
    useToast('에러가 발생했습니다', 'error');
  }
};

const myAPI = {
  getMyInfo,
  setMyJobTag,
  setMyProfileImg,
};

export default myAPI;
