import React from 'react';
import styled from 'styled-components';
import AsideUser from '../components/post/aside/AsideUser';
import Action from '../components/post/aside/Action';
import PostLayout from '../components/post/PostLayout';

const Post = () => {
  const boards = {
    id: 1,
    title: '게시글 제목 테스트',
    content: '게시글 내용 테스트',
    username: '작성자 이름',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image:
      'https://static.wanted.co.kr/community/2022/12/841f2c667de5fca565e21da38495942861631678651bb0e5787b33c3cc9fed60',
    boardLike: 2,
    category: 0,

    commentList: [
      {
        commentId: 1,
        boardId: 1,
        username: '댓글 작성자 이름',
        content: '게시글 1 댓글 내용 테스트1',
        createdAt: '2020-04-12T11:12:30.686',
      },
      {
        commentId: 2,
        boardId: 1,
        username: '댓글 작성자 이름',
        content: '게시글 1 댓글 내용 테스트2',
        createdAt: '2020-04-13T11:12:30.686',
      },
      {
        commentId: 3,
        boardId: 1,
        username: '댓글 작성자 이름',
        content: '게시글 1 댓글 내용 테스트3',
        createdAt: '2020-04-13T11:12:30.686',
      },
    ],
  };

  return (
    <StLayout>
      <StAside>
        <StAsideBox>
          <AsideUser data={boards} />
          <Action data={boards} />
        </StAsideBox>
      </StAside>
      <PostLayout data={boards} />
    </StLayout>
  );
};

const StLayout = styled.div`
  display: flex;
  width: 1070px;
  margin: 80px auto 0;
  padding-top: 60px;
`;

const StAside = styled.div`
  flex: 0 0 180px;
  margin-right: 100px;
`;

const StAsideBox = styled.div`
  position: sticky;
  top: 165px;
`;

export default Post;
