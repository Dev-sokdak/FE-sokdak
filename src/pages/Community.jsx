import React from 'react';
import styled from 'styled-components';
import MyProfile from '../components/community/MyProfile';
import ProfileBanner from '../components/community/ProfileBanner';
import Category from '../components/community/Category';
import PostWriteBox from '../components/community/PostWriteBox';
import PostList from '../components/community/PostList';

const Community = () => {
  return (
    <>
      <PaddingBox />
      <StCommunity>
        <StAside>
          <StAsideArea>
            <MyProfile />
            <ProfileBanner />
          </StAsideArea>
        </StAside>
        <StMain>
          <CategoryBox>
            <Category />
          </CategoryBox>
          <CommunityListBody>
            <PostWriteBox />
            <PostList />
          </CommunityListBody>
        </StMain>
      </StCommunity>
    </>
  );
};

const PaddingBox = styled.div`
  height: 50px;
`;

const StCommunity = styled.div`
  width: 1068px;
  display: flex;
  margin: 0 auto;
  position: relative;
`;

const StAside = styled.aside`
  display: flex;
  flex: 0 0 258px;
  padding: 0;
  margin: 60px 20px 0 0;
`;

const StAsideArea = styled.div`
  position: fixed;
  top: 100px;
  display: grid;
  grid-row-gap: 14px;
  row-gap: 14px;
`;

const StMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryBox = styled.div`
  /* background-color: ${(props) => props.theme.colors.bgColor}; */
  display: block;
  background-color: #f8f8f8;
  position: fixed;
  top: 50px;
  z-index: 100;
  padding-top: 50px;
`;

const CommunityListBody = styled.div`
  margin-top: 129px;
  width: 790px;
`;

export default Community;
