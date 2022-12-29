import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TagModal from './TagModal';
import { category } from '../../utils/code';
import { useLocation } from 'react-router-dom';
import Plus from '../../assets/plus.png';
import close from '../../assets/close.png';

const PostTag = ({ setTag }) => {
  const location = useLocation();
  const { data } = location.state;
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(data.category);

  const showModal = () => {
    setModalOpen(true);
  };

  const handleCancelTag = () => {
    setSelected('');
  };

  // 카테고리 tag string이 선택 -> state값이 변경될 때 렌더링됨
  useEffect(() => {
    setTag(category[selected]);
  }, [selected]);

  return (
    <StPostTag>
      <TagMessage>
        태그 선택<span>(1개)</span>
        <em>*</em>
      </TagMessage>
      <TagWrapper>
        <OpenTag onClick={showModal}>
          <img src={Plus} alt="plus icon" className="plus" />
        </OpenTag>
        {modalOpen && (
          <TagModal
            setModalOpen={setModalOpen}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        {!modalOpen && selected !== null ? (
          <Tag className="selected" onClick={handleCancelTag}>
            {category[selected]}
            <img src={close} alt="close icon" />
          </Tag>
        ) : (
          <Tag></Tag>
        )}
      </TagWrapper>
    </StPostTag>
  );
};

const StPostTag = styled.div`
  margin-bottom: 50px;
`;

const TagMessage = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text3};
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 10px;

  span {
    color: ${({ theme }) => theme.colors.text4};
    margin: 0 4px;
  }

  em {
    color: #fe415c;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OpenTag = styled.button`
  border: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  .plus {
    width: 100%;
    height: 100%;
  }
`;

const Tag = styled.button`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  width: 110px;
  height: 34px;
  background-color: transparent;
  border: 2px dashed #e1e2e3;
  border-radius: 25px;
  text-align: center;
  padding: 8px 0;

  &.selected {
    display: flex;
    align-items: center;
    width: auto;
    padding: 0 10px 0 12px;
    background: ${({ theme }) => theme.colors.bgColors2};
    border: 1px solid #3366ff;
    font-weight: 900;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary1};

    img {
      margin-left: 4px;
      width: 14px;
      height: 14px;
      filter: invert(33%) sepia(89%) saturate(2922%) hue-rotate(218deg)
        brightness(99%) contrast(103%);
    }
  }
`;

export default PostTag;
