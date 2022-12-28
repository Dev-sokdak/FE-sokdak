import React from 'react';
import styled from 'styled-components';

const SubmitPost = () => {
  const handleSubmit = () => {};

  return (
    <StSubmitPost>
      <StSubmitWrapper>
        <div className="submitBox">
          <button type="submit" className="writeBtn" onClick={handleSubmit}>
            등록하기
          </button>
        </div>
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

  .submitBox {
    ${({ theme }) => theme.common.flexCenter}
    width: 135px;
    height: 40px;
    margin-left: auto;
  }

  .writeBtn {
    width: 100%;
    min-width: 64px;
    height: 40px;
    padding: 0 27px;
    background-color: #f2f4f7;
    border: none;
    border-radius: 25px;
    cursor: default;
    font-size: 15px;
    font-weight: 700;
    color: #ccc;
  }

  .writeBtn:active {
    background-color: #36f;
    color: #fff;
  }
`;

export default SubmitPost;