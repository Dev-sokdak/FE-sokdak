import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const PostList = () => {
  return (
    <StPostList>
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
