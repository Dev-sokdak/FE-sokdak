import { instance } from "./core/axios";

// 게시글 전체 조회
const getPosts = async () => {
  try {
    const response = await instance.get(`/api/boards`);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 지역 조회
// id : categoryId
const getPostsByCategory = async (id) => {
  try {
    const response = await instance.get(`/api/boards/category?interestTag=${id}`);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 작성
// data : form-data{ request : json, image : form-data }
const writePosts = async (data) => {
  try {
    const response = await instance.post('/api/boards', data);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 상세 조회
const getPostDetail = async (boardId) => {
  try {
    const response = await instance.get(`/api/boards/${boardId}`);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 수정
// data : form-data{ request : json, image : form-data }
const editPost = async (boardId, data) => {
  try {
    const response = await instance.put(`/api/boards/${boardId}`, data);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 삭제
const deletePost = async (boardId) => {
  try {
    const response = await instance.delete(`/api/boards/${boardId}`);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 좋아요
// 좋아요 되어 있으면 취소하게 작동 (toggle)
const likePost = async (boardId) => {
  try {
    const response = await instance.post(`/api/boards/${boardId}/boardLike`);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const postAPI = {
  getPosts,
  getPostsByCategory,
  writePosts,
  getPostDetail,
  editPost,
  deletePost,
  likePost,
};

export default postAPI;