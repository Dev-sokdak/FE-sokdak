import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileImg from '../../assets/my_profile.svg';
import { useSelector } from 'react-redux';

const ProfileBanner = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const LinkToLogin = () => {
    navigate('/login');
  };

  const LinkToMypage = () => {
    navigate('/my');
  };

  return (
    <BannerBtn onClick={isLoggedIn ? LinkToMypage : LinkToLogin}>
      <BannerMessage>
        나를 잘 표현하고 싶다면?
        <br />
        커뮤니티 프로필 완성하기
      </BannerMessage>
    </BannerBtn>
  );
};

const BannerBtn = styled.button`
  height: 88px;
  width: 100%;
  margin: 0;
  padding: 0 18px;
  display: -ms-flexbox;
  display: flex;
  text-align: left;
  justify-self: center;
  align-items: center;
  position: relative;
  padding: 0 18px;
  border-radius: 6px;
  background: no-repeat right 5px top 10px/77px url(${ProfileImg}),
    linear-gradient(187deg, #01a9fe 0.24%, #2f5fef);
`;

const BannerMessage = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.6em;
  color: #f0f0f0;
  max-width: 180px;
  word-wrap: break-word;
  word-break: keep-all;
`;

export default ProfileBanner;
