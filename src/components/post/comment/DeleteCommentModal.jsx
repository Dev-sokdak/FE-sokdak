import React from 'react';
import styled from 'styled-components';
import useToast from '../../../hooks/useToast';

const DeleteCommentModal = ({ setModalOpen }) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  const handleDelete = () => {
    useToast(`삭제되었습니다.`, 'success');
    setModalOpen(false);
  };

  return (
    <StModalRoot>
      <ModalBackDrop>
        <Modal>
          <ModalHeader>
            <Title>댓글을 삭제하시겠습니까?</Title>
          </ModalHeader>
          <ModalBtn>
            <CancelBtn type="submit" onClick={handleClose}>
              취소
            </CancelBtn>
            <DeleteBtn type="submit" onClick={handleDelete}>
              삭제하기
            </DeleteBtn>
          </ModalBtn>
        </Modal>
      </ModalBackDrop>
    </StModalRoot>
  );
};

const StModalRoot = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  z-index: 999;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
`;

const ModalBackDrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  ${({ theme }) => theme.common.absoluteCenter}
  width: 400px;
  height: 233px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgColor2};
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 10%);
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 10%);
`;

const ModalHeader = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn}
  flex: 1 1;
  overflow-y: auto;
  padding: 77px 24px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 19px;
  color: ${({ theme }) => theme.colors.text2};
  text-align: center;
`;

const ModalBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0 0 auto;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 15px 20px;
  background: ${({ theme }) => theme.colors.bgColor2};
`;

const CancelBtn = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.bgColor2};
  ${({ theme }) => theme.common.borderLine};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.text2};
  font-weight: 600;
  font-size: 16px;
  margin-right: 10px;
  padding: 0;
  cursor: pointer;
`;

const DeleteBtn = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary1};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.text5};
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #0249dc;
  }
`;

export default DeleteCommentModal;
