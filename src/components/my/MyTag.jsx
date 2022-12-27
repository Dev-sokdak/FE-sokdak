import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const MyTag = () => {
  return (
    <StMyTag>
      <StHeader>
        <h1>전문분야 설정</h1>
      </StHeader>
      <StForm>
        <div className="StFormContainer">
          <StJobTag>
            <h6>직무</h6>
            <div className="selectBox">
              <select>
                <option>서버</option>
                <option>프론트엔드</option>
                <option>웹 개발</option>
                <option>앱 개발</option>
                <option>게임 개발</option>
                <option>QA</option>
                <option>DevOps</option>
              </select>
            </div>
          </StJobTag>
          <StJobTag>
            <h6>경력</h6>
            <div className="selectBox">
              <select>
                <option>신입</option>
                <option>1년차</option>
                <option>2년차</option>
                <option>3년차</option>
                <option>4년차</option>
                <option>5년차</option>
                <option>6년차</option>
                <option>7년차</option>
                <option>8년차</option>
                <option>9년차</option>
                <option>10년차 이상</option>
              </select>
            </div>
          </StJobTag>
          <button type="button">작성 완료</button>
        </div>
      </StForm>
    </StMyTag>
  );
};

const StMyTag = styled.div`
  padding: 41px 0 30px;
  ${theme.common.borderLine};
  border-radius: 3px;
  background-color: ${theme.colors.bgColor2};
  margin-top: 10px;
`;

const StHeader = styled.div`
  padding-right: 30px;
  padding-left: 30px;

  h1 {
    width: 150px;
    color: ${theme.colors.text2};
    font-size: ${theme.fontSizes.subtitle};
    font-weight: 600;
    line-height: 1;
  }
`;

const StForm = styled.div`
  margin-top: 43px;

  .StFormContainer {
    padding-right: 30px;
    padding-left: 30px;
  }

  button {
    ${theme.common.flexCenter};
    width: 140px;
    height: 40px;
    ${theme.common.borderLine};
    border-radius: 9999px;
    font-size: 15px;
    font-weight: 600;
    color: ${theme.colors.text2};
    background: none;
    cursor: pointer;
    margin-top: 16px;
    margin-left: auto;
  }

  button:active {
    background-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.text5};
  }
`;

const StJobTag = styled.div`
  display: block;
  position: relative;
  padding: 15px 0;
  color: #999;

  h6 {
    position: absolute;
    top: 50%;
    left: 0;
    font-size: 16px;
    width: 150px;
  }

  .selectBox {
    position: relative;

    select {
      width: calc(100% - 150px);
      padding: 14px 20px;
      margin-left: 150px;
      color: #999;
      font-size: 16px;
      font-weight: 400;
      border: 0;
      border-radius: 3px;
      background-color: #f8f8fa;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
`;

export default MyTag;
