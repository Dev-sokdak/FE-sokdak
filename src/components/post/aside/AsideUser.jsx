import React from 'react';
import theme from '../../../styles/theme';
import styled from 'styled-components';
import defaultProfile from '../../../assets/profile_default 1.svg';

// 게시글 작성 유저의 프로필 이미지 보여주기

const AsideUser = ({ data }) => {
  return (
    <StUser>
      <UserAvatar>
        <img src={defaultProfile} alt="profile" />
      </UserAvatar>
      <UsernameWrapper>
        <StPostUser>
          <ProfileUsername>{data?.username}</ProfileUsername>
          <UserBadgeBox>
            <UserBadge data-id="0">웹개발</UserBadge>
            <UserBadge>신입</UserBadge>
          </UserBadgeBox>
        </StPostUser>
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

const StPostUser = styled.div`
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