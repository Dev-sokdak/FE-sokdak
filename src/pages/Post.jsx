import React from 'react';
import styled from 'styled-components';
import AsideUser from '../components/post/AsideUser';
import Action from '../components/post/Action';
import PostContent from '../components/post/PostContent';

// PostContent component에 게시글 상세 정보, 댓글 리스트, 댓글 입력 컴포넌트들 있음

const Post = () => {
  return (
    <StLayout>
      <StAside>
        <AsideBox>
          <AsideUser />
          <Action />
        </AsideBox>
      </StAside>
      <PostContent />
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

const AsideBox = styled.div`
  position: sticky;
  top: 165px;
`;

export default Post;
