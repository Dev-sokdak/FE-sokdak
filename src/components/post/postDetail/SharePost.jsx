import React from 'react';
import styled from 'styled-components';
import share from '../../../assets/share.png';

const SharePost = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다'); // 테스트
  };

  return (
    <StSharePost>
      <button type="button" onClick={handleCopy}>
        <img src={share} alt="share icon" />
      </button>
    </StSharePost>
  );
};

const StSharePost = styled.div`
  margin-right: 20px;

  button {
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
  }
`;

export default SharePost;
