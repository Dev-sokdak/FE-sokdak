import React from 'react';
import styled from 'styled-components';

const DotCommentPopUp = ({ setShowPopUp, setModalOpen }) => {
  const handleDeleteModal = () => {
    setModalOpen(true);
    setShowPopUp(false);
  };

  return (
    <StDotCommentPopUp>
      <ul>
        <li>
          <DeleteCommentBtn type="button" onClick={handleDeleteModal}>
            삭제하기
          </DeleteCommentBtn>
        </li>
      </ul>
      <StBottomPoint />
    </StDotCommentPopUp>
  );
};

const StDotCommentPopUp = styled.div`
  position: absolute;
  right: -18px;
  top: 27px;
  width: 90px;
  font-size: 12px;
  font-weight: 700;
  padding: 13px 5px;
  -webkit-box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  ${({ theme }) => theme.common.borderLine}
  background-color: ${({ theme }) => theme.colors.bgColor2};
`;

const DeleteCommentBtn = styled.div`
  display: block;
  padding: 4px 17px 4px 10px;
  border-radius: 3px;
  text-align: center;
  width: 100%;
  color: #fe415c;
  cursor: pointer;
`;

// PopUp 상단 작은 말풍선 삼각형(스타일만 있음)
const StBottomPoint = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 100%;
  right: 19px;
  height: 7px;

  &:after {
    content: '';
    border: 1px solid #cdcdcd;
    background-color: ${({ theme }) => theme.colors.bgColor2};
    height: 14px;
    width: 14px;
    display: block;
    /* -webkit-transform: rotate(-55deg) skewX(-20deg);
    -webkit-transform: rotate(-55deg) skewX(-20deg);
    -ms-transform: rotate(-55deg) skewX(-20deg); */
    transform: rotate(-55deg) skewX(-20deg);
  }
`;

export default DotCommentPopUp;
