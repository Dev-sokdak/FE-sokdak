import React from 'react';
import styled from 'styled-components';
import like from '../../../assets/like.svg';
import comment from '../../../assets/comment.svg';

const Action = ({ data }) => {
  return (
    <StAction>
      <div className="likeBox box">
        <button type="button">
          <img src={like} alt="like" />
        </button>
        <span>{data?.boardLike}</span>
      </div>
      <div className="commentBox box">
        <button type="button">
          <img src={comment} alt="comment" />
        </button>
        <span>{data?.commentList.length}</span>
      </div>
    </StAction>
  );
};

const StAction = styled.div`
  display: flex;
  padding: 0 6px;

  .box {
    flex: 1 1; // 화면 비율에 따라 크기 달라짐
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      color: #333;
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      margin-left: 6px;
      line-height: 100%;
      font-size: 13px;
      font-weight: 700;
      color: #333;
    }
  }
`;

export default Action;
