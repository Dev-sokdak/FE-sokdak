import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';
import defaultProfile from '../../assets/profile_default 1.svg';

const AsideUser = () => {
  return (
    <StUser>
      <UserAvatar>
        <img src={defaultProfile} alt="profile" />
      </UserAvatar>
      <UsernameWrapper>
        {/* <NotLoggedIn> 삭제함 */}
        <LoggedIn>
          <ProfileUsername>양정동마자용</ProfileUsername>
          <UserBadgeBox>
            {/* 직군, 연차 정보가 부족한 경우 */}
            {/* <UserBadge>직군, 연차 정보가 부족합니다.</UserBadge> */}
            <UserBadge data-id="0">웹개발</UserBadge>
            <UserBadge>신입</UserBadge>
          </UserBadgeBox>
        </LoggedIn>
      </UsernameWrapper>
    </StUser>
  );
};

const StUser = styled.div`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid #e1e2e3;
  margin-bottom: 25px;
  padding-left: 6px;
`;

// 프로필
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

// const NotLoggedIn = styled.span`
//   text-align: left;
//   font-size: 16px;
//   font-style: normal;
//   line-height: 22px;
//   color: ${theme.colors.text1};
//   width: 100%;
//   font-weight: 500;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: hidden;
// `;

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

export default AsideUser;
