import React from 'react';

import styled from 'styled-components';

const SubmitPost = ({ handleSubmit, disabled }) => {
  // TODO 게시글 최초 작성, 수정 후 상세페이지로 redirect

  return (
    <StSubmitPost>
      <StSubmitWrapper>
        <SubmitBox>
          <WriteBtn onClick={handleSubmit} disabled={disabled}>
            등록하기
          </WriteBtn>
        </SubmitBox>
      </StSubmitWrapper>
    </StSubmitPost>
  );
};

// 상단 헤더(등록하기 버튼)
const StSubmitPost = styled.div`
  position: fixed;
  top: 50px;
  z-index: 10;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.bgColor2};
  ${({ theme }) => theme.common.borderLine};
`;

const StSubmitWrapper = styled.div`
  ${({ theme }) => theme.common.flexBetween}
  max-width: 1060px;
  margin: 0 auto;
  height: 100%;
  padding: 10px 0;
`;

const SubmitBox = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 135px;
  height: 40px;
  margin-left: auto;
`;

const WriteBtn = styled.button`
  width: 100%;
  min-width: 64px;
  height: 40px;
  padding: 0 27px;
  border: none;
  border-radius: 25px;
  cursor: default;
  font-size: 15px;
  font-weight: 700;
  background-color: #36f;
  color: #fff;

  &:disabled {
    background-color: #f2f4f7;
    color: #ccc;
  }

  &:active {
    background-color: #fff;
    border: 1px solid #36f;
    color: #36f;
  }
`;

export default SubmitPost;
