import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import arrow from '../../assets/arrow.svg';

const EmptyCommentInput = () => {
  const navigate = useNavigate();

  const LinkToCommunity = () => {
    navigate('/');
  };

  return (
    <>
      <Bottom>
        {/* textarea 클릭하면 로그인 페이지로 이동함 */}
        <Link to={`/login`}>
          <form>
            <textarea placeholder="로그인 후 댓글 남기기" />
            <button type="submit">등록</button>
          </form>
        </Link>
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

export default EmptyCommentInput;
