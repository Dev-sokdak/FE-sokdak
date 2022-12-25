import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import empty from '../../assets/empty_comment.svg';

const EmptyCommentList = () => {
  return (
    <StEmptyCommentList>
      <img src={empty} alt="speech-bubble" />
      <p>첫 댓글을 남겨주세요</p>
    </StEmptyCommentList>
  );
};

const StEmptyCommentList = styled.div`
  ${theme.common.flexCenterColumn};
  width: 100%;
  height: 208px;
  margin-bottom: 21px;

  img {
    width: 75px;
    height: 75px;
  }

  p {
    margin-top: 12px;
    color: ${theme.colors.text3};
  }
`;

export default EmptyCommentList;
