import React from 'react';
import styled from 'styled-components';
import PostTag from '../components/write/PostTag';
import WritePost from '../components/write/WritePost';
import PostImage from '../components/write/PostImage';
import SubmitPost from '../components/write/SubmitPost';

const Write = () => {
  return (
    <StLayout>
      <StContainer>
        <SubmitPost />
        <StWriteWrapper>
          <StWriteContainer>
            <PostTag />
            <WritePost />
            <PostImage />
          </StWriteContainer>
        </StWriteWrapper>
      </StContainer>
    </StLayout>
  );
};

//전체 레이아웃
const StLayout = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
`;

const StContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

// 글쓰기 영역
const StWriteWrapper = styled.div`
  position: relative; // 사진 위치 고정 위함
  width: 100%;
  padding-top: 109px; // nav+header height -1px
`;

const StWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 790px;
  min-height: calc(100vh - 110px);
  padding: 39px 40px;
  margin: 0 auto;
  border-top: 0;
  background-color: ${({ theme }) => theme.colors.bgColor2};
  ${({ theme }) => theme.common.borderLine}
`;

export default Write;
