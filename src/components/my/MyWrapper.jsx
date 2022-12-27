import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import MyProfile from './MyProfile';
import MyprofileModal from './MyprofileModal';
import MyTag from './MyTag';

const MyWrapper = () => {
  return (
    <StMyWrapper>
      <h1>My 커뮤니티</h1>
      <StMyContainer>
        <MyProfile />
      </StMyContainer>
      <MyTag />
    </StMyWrapper>
  );
};

const StMyWrapper = styled.div`
  position: relative; // 수정하기 버튼 absolute
  width: 100%;

  h1 {
    margin-bottom: 16px;
    font-size: ${theme.fontSizes.subtitle};
    font-weight: 700;
    line-height: 24px;
    color: ${theme.colors.text1};
    pointer-events: none;
  }
`;

const StMyContainer = styled.div`
  /* position: relative; */
  width: 100%;
  min-height: 160px;
  border-radius: 5px;
  ${theme.common.borderLine}
  background-color: ${theme.colors.bgColor2};
  padding: 29px;
`;

export default MyWrapper;
