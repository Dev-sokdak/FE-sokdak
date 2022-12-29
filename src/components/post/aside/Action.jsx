import React from 'react';
import styled from 'styled-components';
import Like from '../../../assets/gray-like.svg';
import BlueLike from '../../../assets/blue-like.svg';
import Comment from '../../../assets/gray-comment.svg';
import BlueComment from '../../../assets/blue-comment.svg';

const Action = ({ data }) => {
  return (
    <StAction>
      <StBox className="likeBox">
        <ActionButton>
          <img src={data?.boardLikeUserId ? BlueLike : Like} alt="likes" />
        </ActionButton>
        <Counts>{data?.likeCnt}</Counts>
      </StBox>
      <StBox className="commentBox box">
        <ActionButton>
          <img
            src={data?.commentIncluding ? BlueComment : Comment}
            alt="comments"
          />
        </ActionButton>
        <Counts>{data.commentList?.length}</Counts>
      </StBox>
    </StAction>
  );
};

const StAction = styled.div`
  display: flex;
  padding: 0 6px;
`;

const StBox = styled.div`
  flex: 1 1; // 화면 비율에 따라 크기 달라짐
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  color: #333;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Counts = styled.span`
  margin-left: 6px;
  line-height: 100%;
  font-size: 13px;
  font-weight: 700;
  color: #333;
`;

export default Action;
