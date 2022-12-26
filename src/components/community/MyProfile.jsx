import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { useNavigate } from 'react-router-dom';
import defaultProfile from '../../assets/profile_default 1.svg';

const MyProfile = () => {
  const navigate = useNavigate();

  // 로그인 안했을 때
  const LinkToLogin = () => {
    navigate('/login');
  };

  const LinkToMypage = () => {
    navigate('/my');
  };

  return (
    <Profile>
      <ProfileTitle>MY 커뮤니티</ProfileTitle>
      <ProfileButton onClick={LinkToMypage}>
        <UserAvatar>
          <img src={defaultProfile} alt="profile" />
        </UserAvatar>
        <UsernameWrapper>
          {/* 로그인 안된 경우 */}
          {/* <NotLoggedIn>로그인 해주세요</NotLoggedIn> */}
          {/* 로그인 된 경우 */}
          <LoggedIn>
            <ProfileUsername>마장동한우킬러</ProfileUsername>
            <UserBadgeBox>
              {/* 직군, 연차 정보가 부족한 경우 */}
              <UserBadge>직군, 연차 정보가 부족합니다.</UserBadge>
              {/* <UserBadge data-id="0">웹개발</UserBadge>
              <UserBadge>신입</UserBadge> */}
            </UserBadgeBox>
          </LoggedIn>
        </UsernameWrapper>
        <ProfileArrow>
          {/* arrow icon */}
          <svg width="18" height="18">
            <path
              d="M5.21967 2.21967C5.48594 1.9534 5.9026 1.9292 6.19621 2.14705L6.28033 2.21967L12.5303 8.46967C12.7966 8.73594 12.8208 9.1526 12.6029 9.44621L12.5303 9.53033L6.28033 15.7803C5.98744 16.0732 5.51256 16.0732 5.21967 15.7803C4.9534 15.5141 4.9292 15.0974 5.14705 14.8038L5.21967 14.7197L10.939 9L5.21967 3.28033C4.9534 3.01406 4.9292 2.5974 5.14705 2.30379L5.21967 2.21967Z"
              fill="#666666"
            ></path>
          </svg>
        </ProfileArrow>
      </ProfileButton>
    </Profile>
  );
};

const Profile = styled.div`
  width: 258px;
  height: 123px;
  padding: 23px 24px;
  background-color: #fff;
  ${theme.common.borderLine};
`;

const ProfileTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.text3};
`;

const ProfileButton = styled.button`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 37px;
  cursor: pointer;
`;

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

const UsernameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 134px;
  height: 100%;
  margin-left: 10px;
  color: ${theme.colors.text3};
`;

const ProfileArrow = styled.div`
  position: absolute;
  top: 8.5px;
  right: 0;
  display: -ms-inline-flexbox;
  display: inline-flex;
`;

const NotLoggedIn = styled.span`
  text-align: left;
  font-size: 16px;
  font-style: normal;
  line-height: 22px;
  color: ${theme.colors.text1};
  width: 100%;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const LoggedIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileUsername = styled.div`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #000;
  text-align: left;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const UserBadgeBox = styled.div`
  display: flex;
  white-space: nowrap;
  div {
    &:not(:last-child) {
      margin-right: 4px;
    }
  }
`;

const UserBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4px;
  height: 19px;
  background: #f6f6f6;
  border-radius: 4px;
  font-weight: 700;
  font-size: 10px;
  line-height: 19px;
  color: #888;

  // 0 웹개발 1 서버 2 프론트 3 QA 4 DevOps
  &[data-id='0'] {
    color: #8958fa;
  }
  &[data-id='1'] {
    color: #5866dc;
  }
  &[data-id='2'] {
    color: #008ae2;
  }
  &[data-id='3'] {
    color: #f07c08;
  }
  &[data-id='4'] {
    color: #8958fa;
  }
`;

export default MyProfile;
