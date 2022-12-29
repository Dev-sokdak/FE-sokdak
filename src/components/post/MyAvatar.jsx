import React from 'react';
import styled from 'styled-components';
import defaultProfile from '../../assets/profile_default 1.svg';

// 로그인한 유저의 프로필 사진 보여주기

const MyAvatar = () => {
  return (
    <>
      <UserAvatar>
        <img src={defaultProfile} alt="profile" />
      </UserAvatar>
    </>
  );
};

const UserAvatar = styled.div`
  width: 38px;
  height: 38px;
  border: 1px solid #ececec;
  border-radius: 50%;
  overflow: hidden;
  background-color: #d8d8d8;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
  }
`;

export default MyAvatar;
