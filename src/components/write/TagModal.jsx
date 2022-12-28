import React from 'react';
import styled from 'styled-components';
import { category } from '../../utils/code';
import close from '../../assets/close.png';

const TagModal = ({ setModalOpen, selected, setSelected }) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  const handleClick = (e) => {
    setSelected(e.target.id);
  };

  const handleTag = () => {
    selected ? setModalOpen(false) : alert('태그를 선택해주세요');
    setSelected(e.target.id);
  };

  return (
    <StModalRoot>
      <ModalBackDrop>
        <Modal>
          <ModalHeader>
            <Title>태그 선택</Title>
            <CloseBtn type="button" onClick={handleClose}>
              <img src={close} alt="close icon" />
            </CloseBtn>
          </ModalHeader>
          <ModalForm>
            <ModalContent>
              <SubTitle>작성글 주제에 맞는 태그를 선택해주세요. (1개)</SubTitle>
              <TagsWrapper>
                <ul>
                  <li>
                    {Object.entries(category).map((item) => (
                      <TagBtn
                        type="button"
                        className={selected === item[0] ? 'selected' : ''}
                        key={item[0]}
                        id={item[0]}
                        onClick={handleClick}
                      >
                        {item[1]}
                      </TagBtn>
                    ))}
                  </li>
                </ul>
              </TagsWrapper>
              <ModalBtn>
                <SaveBtn type="submit" onClick={handleTag}>
                  완료
                </SaveBtn>
              </ModalBtn>
            </ModalContent>
          </ModalForm>
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
  width: 385px;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgColor2};
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 10%);
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 10%);
  padding: 16px 20px;
`;

const ModalHeader = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  position: relative;
  height: 62px;
  padding-top: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const CloseBtn = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text4};
  position: absolute;
  right: 15px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const ModalForm = styled.div`
  height: 100%;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 100px;
  max-height: calc(100vh - 242px);
`;

const SubTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-top: 4px;
  margin-bottom: 30px;
`;

const TagsWrapper = styled.div`
  margin-bottom: 24px;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    float: left;
    margin: 0 5px 16px 0;
    height: 38px;
  }
`;

const TagBtn = styled.div`
  display: inline-block;
  padding: 11px;
  font-size: 15px;
  vertical-align: center;
  height: 100%;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text4};
  border: 1px solid transparent;
  border-radius: 21px;
  background: #f2f4f7;
  margin: 5px;

  &.selected {
    background: ${({ theme }) => theme.colors.bgColor2};
    border: 1px solid #3366ff;
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

const ModalBtn = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 15px 20px;
  background: ${({ theme }) => theme.colors.bgColor2};
`;

const SaveBtn = styled.div`
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

export default TagModal;
