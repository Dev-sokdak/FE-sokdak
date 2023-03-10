import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';
import PostTagList from './PostTagList';
import PostUser from './postDetail/PostUser';
import BottomAction from './postDetail/BottomAction';
import SharePost from './postDetail/SharePost';
import DotPost from './postDetail/DotPost';
import EmptyCommentList from '../post/comment/EmptyCommentList';
import CommentList from '../post/comment/CommentList';
// import EmptyCommentInput from './EmptyCommentInput';
import CommentInput from '../../components/post/comment/CommentInput';

const PostLayout = ({ data }) => {
  return (
    <StPostLayout>
      <StPostWrapper>
        <PostUser data={data} />
        <Title>{data?.title}</Title>
        <Content>{data?.content}</Content>
        <ImageBox>
          <img src={data?.image} />
        </ImageBox>
        {/* <StPostTagList>선택한 태그들</StPostTagList> */}
        <PostTagList tag={data?.category} />
        <StBottomBox>
          <BottomAction data={data} />
          <SharePost />
          <DotPost data={data} />
        </StBottomBox>
      </StPostWrapper>
      <StCommentWrapper>
        {data.commentList?.length === 0 ? (
          <EmptyCommentList />
        ) : (
          <CommentList comments={data?.commentList} />
        )}
        {/* 로그인 안된 경우 */}
        {/* <EmptyCommentInput /> */}
        {/* 로그인 된 경우 */}
        <CommentInput username={data?.nickname} />
      </StCommentWrapper>
    </StPostLayout>
  );
};

const StPostLayout = styled.div`
  flex: 1 0 790px; // 기본 크기 790
  background-color: ${theme.colors.bgColor2};
`;

const StPostWrapper = styled.div`
  padding: 56px 39px 40px;
  background-color: ${theme.colors.bgColor2};
  ${theme.common.borderLine};
`;

const Title = styled.div`
  font-size: ${theme.fontSizes.title};
  font-weight: 700;
  color: ${theme.colors.text2};
  word-break: break-all;
  margin-top: 88px;
  margin-bottom: 32px;
`;

const Content = styled.div`
  max-width: 710px;
  font-size: ${theme.fontSizes.paragraph};
  line-height: 1.65;
  margin-bottom: 20px;
  color: ${theme.colors.text2};
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: keep-all;
`;

const ImageBox = styled.div`
  margin-bottom: 80px;

  img {
    width: 100%;
  }
`;

const StPostTagList = styled.div`
  display: flex;
  margin-bottom: 44px;
`;

const StBottomBox = styled.div`
  display: flex;
  position: relative;
`;

const StCommentWrapper = styled.div`
  padding: 25px 39px 100px;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  border-top: 0;
`;

export default PostLayout;
