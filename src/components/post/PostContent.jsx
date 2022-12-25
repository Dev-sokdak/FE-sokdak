import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';
import PostUser from '../post/PostUser';
import PostAction from '../post/PostAction';
// import EmptyCommentList from '../../components/post/EmptyCommentList';
import CommentList from '../../components/post/CommentList';
// import EmptyCommentInput from './EmptyCommentInput';
import CommentInput from '../../components/post/CommentInput';

// 게시글 상세 정보(제목, 내용, 태그들) 보여주기
// 로그인 유무에 따라 댓글 리스트와 댓글 입력 컴포넌트 다르게 보여주기

const PostContent = () => {
  return (
    <StPostContent>
      <StPostWrapper>
        <PostUser />
        <Content>
          <h1>게시글 제목</h1>
          <div className="content">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
          <PostTags>선택한 태그들</PostTags>
          <PostAction />
        </Content>
      </StPostWrapper>
      <StComment>
        {/* 댓글이 없는 경우 */}
        {/* <EmptyCommentList /> */}
        {/* 댓글 있는 경우 */}
        <CommentList />
        {/* 로그인 안된 경우 */}
        {/* <EmptyCommentInput /> */}
        {/* 로그인 된 경우 */}
        <CommentInput />
      </StComment>
    </StPostContent>
  );
};

const StPostContent = styled.div`
  flex: 1 0 790px; // 기본 크기 790
  background-color: ${theme.colors.bgColor2};
`;

const StPostWrapper = styled.div`
  padding: 56px 39px 40px;
  background-color: ${theme.colors.bgColor2};
  ${theme.common.borderLine};
`;

const Content = styled.div`
  h1 {
    font-size: ${theme.fontSizes.title};
    font-weight: 700;
    color: ${theme.colors.text2};
    word-break: break-all;
    margin-top: 88px;
    margin-bottom: 32px;
  }

  .content {
    max-width: 710px;
    margin-bottom: 80px;
    font-size: ${theme.fontSizes.paragraph};
    line-height: 1.65;
    color: ${theme.colors.text2};
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: keep-all;
  }
`;

const PostTags = styled.div`
  display: flex;
  margin-bottom: 44px;
`;

const StComment = styled.div`
  padding: 25px 39px 100px;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  border-top: 0;
`;

export default PostContent;
