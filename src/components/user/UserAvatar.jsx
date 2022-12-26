import React from 'react';
import styled from 'styled-components';
import defaultProfile from '../../assets/profile_default 1.svg';

const UserAvatar = ({ image, width, height }) => {
  return (
    <StUserAvatar width={width} height={height}>
      <img src={image ? image : defaultProfile} alt="profile" />
    </StUserAvatar>
  );
};

const StUserAvatar = styled.div`
  width: ${(props) => props.width || '28px'};
  height: ${(props) => props.height || '28px'};
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

export default UserAvatar;
