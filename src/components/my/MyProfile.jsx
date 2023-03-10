import React, { useState } from 'react';
import MyprofileModal from './MyprofileModal';
import styled from 'styled-components';
import theme from '../../styles/theme';
import defaultProfile from '../../assets/profile_default 1.svg';
import edit from '../../assets/edit.svg';
import { career, jobTag } from '../../utils/code';

// TODO - 유저 변경 시 태그 최신화
const MyProfile = ({ userInfo }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <StMyProfile>
      <UserAvatar>
        <img src={userInfo.profileImage ?? defaultProfile} alt="profile" />
      </UserAvatar>
      <UsernameWrapper>
        <MyInfo>
          <ProfileUsername>{userInfo.nickname}</ProfileUsername>
          <UserBadgeBox>
            <UserBadgeBox>
              {userInfo.jobTag === 999 || userInfo.careerTag === 999 ? (
                <UserBadge>직군, 연차 정보가 부족합니다.</UserBadge>
              ) : (
                <>
                  <UserBadge data-id={userInfo.jobTag}>
                    {jobTag[userInfo.jobTag]}
                  </UserBadge>
                  <UserBadge>{career[userInfo.careerTag]}</UserBadge>
                </>
              )}
            </UserBadgeBox>
          </UserBadgeBox>
        </MyInfo>
        <EditMyInfo onClick={showModal}>
          <img src={edit} alt="edit icon" />
          수정하기
        </EditMyInfo>
        {modalOpen && <MyprofileModal setModalOpen={setModalOpen} />}
      </UsernameWrapper>
    </StMyProfile>
  );
};

const StMyProfile = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 140px);
`;

const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  ${theme.common.borderLine}
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
  color: ${theme.colors.text3};
`;

const EditMyInfo = styled.button`
  position: absolute;
  top: 100px;
  right: 30px;
  ${theme.common.flexCenter};
  width: 140px;
  height: 40px;
  ${theme.common.borderLine};
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 600;
  color: ${theme.colors.text2};
  background: none;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileUsername = styled.div`
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  color: ${theme.colors.text1};
  text-align: left;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
`;

const UserBadgeBox = styled.div`
  display: flex;
  white-space: nowrap;
  div {
    &:not(:last-child) {
      margin-right: 6px;
    }
  }
`;

const UserBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  height: 21px;
  background: #f6f6f6;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
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
