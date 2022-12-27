import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import MyAvatar from '../MyAvatar';
import arrow from '../../../assets/arrow-bottom.svg';

// 로그인한 유저 이름 보여주기
// form submit 할 때 textarea value 값 보내는 기능 추가

const CommentInput = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const LinkToCommunity = () => {
    navigate('/');
  };

  return (
    <>
      <Top>
        <MyAvatar />
        <div className="myName">로그인한 사용자 이름</div>
      </Top>
      <Bottom>
        <form>
          <textarea
            placeholder="댓글 남기기"
            value={comment}
            onChange={handleComment}
          />
          <button type="submit">등록</button>
        </form>
      </Bottom>
      <StBtn>
        <button type="button" onClick={LinkToCommunity}>
          <img src={arrow} alt="arrow" />
          목록으로
        </button>
      </StBtn>
    </>
  );
};

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;

  .myName {
    font-size: 14px;
    color: ${theme.colors.text1};
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 650px;
    margin-left: 9px;
  }
`;

const Bottom = styled.div`
  position: relative;
  height: 146px;
  border-radius: 4px;
  ${theme.common.borderLine};
  background-color: ${theme.colors.bgColor2};
  overflow: hidden;

  textarea {
    width: 100%;
    height: 84px;
    padding: 16px 20px;
    border: 0;
    resize: none;
    outline: none;

    ::placeholder {
      color: ${theme.colors.text4};
      font-size: 14px;
    }
  }

  button {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 70px;
    height: 32px;
    padding: 0;
    background-color: #f2f4f7;
    border-radius: 15px;
    border: 0;
    font-size: 15px;
    color: #ccc;
    cursor: default;
  }

  button:active {
    background-color: ${theme.colors.primary1};
    color: ${theme.colors.text5};
    cursor: pointer;
  }
`;

const StBtn = styled.div`
  display: flex;

  button {
    height: 32px;
    padding: 0 16px;
    margin-top: 30px;
    background-color: transparent;
    border: 0;
    ${theme.common.borderLine};
    border-radius: 15px;
    font-size: 14px;
    font-weight: 700;
    color: ${theme.colors.text2};
    line-height: 20px;
  }

  img {
    width: 10px;
    height: 10px;
    transform: rotate(90deg);
    margin-right: 9px;
  }
`;

export default CommentInput;
