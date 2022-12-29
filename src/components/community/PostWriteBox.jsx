import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import write from '../../assets/write.svg';
import { useSelector } from 'react-redux';

// TODO - userProfile 추가
const PostWriteBox = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const LinkToLogin = () => {
    navigate('/login');
  };

  const LinkToWrite = () => {
    navigate('/write', {
      state: {
        data: {
          title: '',
          content: '',
          category: '',
        },
        isEdit: false,
      },
    });
  };

  return (
    <StPostWriteBox>
      <PostWriteButton onClick={isLoggedIn ? LinkToWrite : LinkToLogin}>
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
