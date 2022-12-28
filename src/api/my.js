import { instance } from "./core/axios";

// 마이페이지 정보 받기
const getMyInfo = async () => {
  try {
    const response = await instance.get('/api/mypage');
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 내 태그 설정
// tags : { jobTag, careerTag }
const setMyJobTag = async (tags) => {
  try {
    const response = await instance.patch('/api/mypage/jobtag', tags);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 내 프로필 사진 설정
// form-data 
const setMyProfileImg = async (img) => {
  try {
    const response = await instance.patch('/api/mypage/profile', img);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const myAPI = {
  getMyInfo,
  setMyJobTag,
  setMyProfileImg,
};

export default myAPI;