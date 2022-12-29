import React from 'react';
import kakao from '../../assets/kakao_login.svg';
import styled from 'styled-components';

const KakaoLoginBtn = () => {
  return (
    <KakaoBox>
      <a href={import.meta.env.VITE_KAKAO_AUTH_URL}>
        <img src={kakao} alt="kakao login" />
      </a>
      <Caption>kakao</Caption>
    </KakaoBox>
  );
};

const KakaoBox = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width: 100%;
`;

const Caption = styled.p`
  width: 100%;
  color: #939393;
  font-weight: 600;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export default KakaoLoginBtn;
