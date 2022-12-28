import React from 'react';
import styled from 'styled-components';
import { category } from '../../utils/code';

const PostTagList = ({ tag }) => {
  return (
    <StPostTagList>
      {/* {tags && tags.map((tag) => <PostTag key={tag}>{category[tag]}</PostTag>)} */}
      <PostTag key={tag}>{category[tag]}</PostTag>
    </StPostTagList>
  );
};

const StPostTagList = styled.div`
  margin-bottom: 44px;
  display: flex;
`;

const PostTag = styled.button`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 400;
  color: #888;
  height: 26px;
  padding: 0 8px;
`;

export default PostTagList;
