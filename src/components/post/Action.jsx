import React from 'react';
import styled from 'styled-components';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';

// 좋아요, 댓글 개수 기능 추가

const Action = () => {
  return (
    <StAction>
      <div className="likeBox box">
        <button type="button">
          <img src={like} alt="like" />
        </button>
        <span>0</span>
      </div>
      <div className="commentBox box">
        <button type="button">
          <img src={comment} alt="comment" />
        </button>
        <span>0</span>
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
    }
  }
`;

export default Action;
