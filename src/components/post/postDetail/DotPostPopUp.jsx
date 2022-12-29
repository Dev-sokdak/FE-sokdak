import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import postAPI from '../../../api/post';
import useToast from '../../../hooks/useToast';

const DotPostPopUp = ({ data, setShowPopUp, setModalOpen }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteModal = () => {
    setModalOpen(true);
    setShowPopUp(false);
  };

  const handleEditPost = () => {
    navigate('/write', {
      state: {
        data,
        isEdit: true,
      },
    });
  };

  const handleDelete = async () => {
    await postAPI.deletePost(id).then((res) => {
      useToast('삭제되었습니다.', 'success');
    });
  };

  return (
    <StDotPostPopUp>
      <ul>
        <li>
          <DeletePostBtn type="button" onClick={handleDeleteModal}>
            삭제하기
          </DeletePostBtn>
        </li>
        <li>
          <EditPostBtn type="button" onClick={handleEditPost}>
            수정하기
          </EditPostBtn>
        </li>
      </ul>
      <StBottomPoint />
    </StDotPostPopUp>
  );
};

const StDotPostPopUp = styled.div`
  position: absolute;
  right: -14px;
  bottom: 27px;
  color: #333;
  font-size: 13px;
  font-weight: 700;
  padding: 13px 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  ${({ theme }) => theme.common.borderLine}
  background-color: ${({ theme }) => theme.colors.bgColor2};

  li {
    margin-bottom: 2px;
  }
`;

const DeletePostBtn = styled.div`
  display: block;
  padding: 4px 17px 4px 10px;
  border-radius: 3px;
  text-align: left;
  width: 100%;
  color: #fe415c;
  cursor: pointer;
`;

const EditPostBtn = styled.div`
  display: block;
  padding: 4px 17px 4px 10px;
  border-radius: 3px;
  text-align: left;
  width: 100%;
  cursor: pointer;
`;

// PopUp 하단 작은 말풍선 삼각형(스타일만 있음)
const StBottomPoint = styled.div`
  position: absolute;
  overflow: hidden;
  top: 100%;
  right: 19px;
  height: 7px;

  &:after {
    content: '';
    border: 1px solid #cdcdcd;
    background-color: ${({ theme }) => theme.colors.bgColor2};
    height: 14px;
    width: 14px;
    display: block;
    -webkit-transform: rotate(-55deg) skewX(-20deg);
    transform: rotate(-55deg) skewX(-20deg);
    margin-top: -12px;
    border-bottom-left-radius: 2px;
  }
`;

export default DotPostPopUp;
