import { instance } from "./core/axios";

// 댓글 작성
// comment : 댓글 내용
const writeComment = async (baordId, comment) => {
  try {
    const response = await instance.post(`/api/boards/${baordId}/comment`, comment);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 댓글 삭제
const deleteComment = async (boardId, commentId) => {
  try {
    const response = await instance.delete(`/api/boards/${boardId}/comment/${commentId}`);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const commentAPI = {
  writeComment,
  deleteComment,
};

export default commentAPI;