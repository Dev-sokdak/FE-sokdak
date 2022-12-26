import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import write from '../../assets/write.svg';

// TODO - userProfile 추가
// TODO - login 안됐을 시 로그인 페이지로 이동

const PostWriteBox = () => {
  const navigate = useNavigate();
  // 로그인 안했을 때
  const LinkToLogin = () => {
    navigate('/login');
  };

  const LinkToWrite = () => {
    navigate('/write');
  };

  return (
    <StPostWriteBox>
      <PostWriteButton onClick={LinkToWrite}>
        커리어에 대해 자유롭게 이야기 해보세요!
        <img src={write} alt="write" />
      </PostWriteButton>
    </StPostWriteBox>
  );
};

const StPostWriteBox = styled.section`
  padding: 29px 29px 31px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

const PostWriteButton = styled.button`
  flex: 1 1;
  height: 56px;
  padding: 0 19px;
  border-radius: 4px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  cursor: pointer;
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default PostWriteBox;
