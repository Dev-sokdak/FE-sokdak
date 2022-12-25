import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';
import PostUser from '../post/PostUser';

// 댓글 리스트 불러와서 보여주는 기능 추가

const CommentList = () => {
  return (
    <>
      <CommentItem>
        <PostUser />
        <CommentContent>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </CommentContent>
      </CommentItem>
      <CommentItem>
        <PostUser />
        <CommentContent>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </CommentContent>
      </CommentItem>
    </>
  );
};

const CommentItem = styled.div`
  border-bottom: 1px solid #ececec;
  margin-bottom: 25px;
`;

const CommentContent = styled.div`
  margin-top: 18px;
  margin-bottom: 25px;
  font-size: ${theme.fontSizes.paragraph};
  line-height: 1.43;
  color: ${theme.colors.text2};
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`;

export default CommentList;
