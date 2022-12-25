import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';
import defaultProfile from '../../assets/profile_default 1.svg';

const PostUser = () => {
  return (
    <StUser>
      <UserAvatar>
        <img src={defaultProfile} alt="profile" />
      </UserAvatar>
      <UsernameWrapper>
        {/* <NotLoggedIn> 삭제함 */}
        <LoggedIn>
          <UserBox>
            <ProfileUsername>양정동마자용</ProfileUsername>
            <UserBadgeBox>
              {/* 직군, 연차 정보가 부족한 경우 */}
              {/* <UserBadge>직군, 연차 정보가 부족합니다.</UserBadge> */}
              <UserBadge data-id="0">웹개발</UserBadge>
              <UserBadge>신입</UserBadge>
            </UserBadgeBox>
          </UserBox>
          <span className="createdAt">2022.12.25</span>
        </LoggedIn>
      </UsernameWrapper>
    </StUser>
  );
};

const StUser = styled.div`
  display: flex;
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
  /* width: 134px; */
  height: 100%;
  margin-left: 10px;
  color: ${theme.colors.text3};
`;

const LoggedIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .createdAt {
    font-size: 12px;
    color: ${theme.colors.text4};
  }
`;

const UserBox = styled.div`
  display: flex;
`;

const ProfileUsername = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
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
  margin-right: 4px;

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

export default PostUser;
