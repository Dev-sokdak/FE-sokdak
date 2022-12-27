import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';
import PostUser from './postDetail/PostUser';
import BottomAction from './postDetail/BottomAction';
import SharePost from './postDetail/SharePost';
import EditPost from './postDetail/EditPost';
// import EmptyCommentList from '../../components/post/EmptyCommentList';
import CommentList from '../../components/post/comment/CommentList';
// import EmptyCommentInput from './EmptyCommentInput';
import CommentInput from '../../components/post/comment/CommentInput';

// 게시글 상세 정보(제목, 내용, 태그들) 보여주기
// 로그인 유무에 따라 댓글 리스트와 댓글 입력 컴포넌트 다르게 보여주기

const PostLayout = ({ data }) => {
  // console.log(data.commentList);
  return (
    <StPostLayout>
      <StPostWrapper>
        <PostUser data={data} />
        <StContent>
          <h1>{data?.title}</h1>
          <div className="content">{data?.content}</div>
          <div className="imgBox">
            <img src={data.image} />
          </div>
          <PostTags>선택한 태그들</PostTags>
          <div style={({ display: 'flex' }, { position: 'relative' })}>
            <BottomAction data={data} />
            <SharePost />
            <EditPost />
          </div>
        </StContent>
      </StPostWrapper>
      <StCommentWrapper>
        {/* 댓글이 없는 경우 */}
        {/* <EmptyCommentList /> */}
        {/* 댓글 있는 경우 */}
        <CommentList comments={data.commentList} />
        {/* 로그인 안된 경우 */}
        {/* <EmptyCommentInput /> */}
        {/* 로그인 된 경우 */}
        <CommentInput username={data.username} />
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

const StContent = styled.div`
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
    font-size: ${theme.fontSizes.paragraph};
    line-height: 1.65;
    margin-bottom: 80px;
    color: ${theme.colors.text2};
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: keep-all;
  }

  .imgBox {
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }
`;

const PostTags = styled.div`
  display: flex;
  margin-bottom: 44px;
`;

const StCommentWrapper = styled.div`
  padding: 25px 39px 100px;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  border-top: 0;
`;

export default PostLayout;
