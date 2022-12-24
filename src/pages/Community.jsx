import React from 'react';
import styled from 'styled-components';
import MyProfile from '../components/community/MyProfile';
import ProfileBanner from '../components/community/ProfileBanner';

const Community = () => {
  return (
    <StCommunity>
      <StAside>
        <StAsideArea>
          <MyProfile />
          <ProfileBanner />
        </StAsideArea>
      </StAside>
      <StMain></StMain>
    </StCommunity>
  );
};

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

const StMain = styled.main``;

export default Community;
