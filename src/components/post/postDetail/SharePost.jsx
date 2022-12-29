import React from 'react';
import styled from 'styled-components';
import useToast from '../../../hooks/useToast';
import share from '../../../assets/share.png';

const SharePost = () => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    useToast(`링크가 복사되었습니다.`, 'success');
  };

  return (
    <StSharePost>
      <ShareBtn type="button" onClick={handleCopyUrl}>
        <img src={share} alt="share icon" />
      </ShareBtn>
    </StSharePost>
  );
};

const StSharePost = styled.div`
  margin-right: 20px;
`;

const ShareBtn = styled.div`
  position: absolute;
  right: 46px;
  bottom: -3px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export default SharePost;
