import React from 'react';
import styled from 'styled-components';
import Post from './Post';

// TODO - post 화면 테스트로 post 컴포넌트 여러개 return한 부분 삭제
const PostList = () => {
  return (
    <StPostList>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </StPostList>
  );
};

const StPostList = styled.section`
  border: 1px solid #ececec;
  border-top: 0;
  width: 100%;
  background-color: #fff;
`;

export default PostList;