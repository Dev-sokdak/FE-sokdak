import React, { useState } from 'react';
import styled from 'styled-components';
import TagModal from './TagModal';
import { category } from '../../utils/code';
import Plus from '../../assets/plus.png';

const PostTag = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState();

  const showModal = () => {
    setModalOpen(true);
  };

  console.log(category[selected]);

  return (
    <StPostTag>
      <TagMessage>
        태그 선택<span>(1개)</span>
        <em>*</em>
      </TagMessage>
      <TagWrapper>
        <OpenTag type="button" onClick={showModal}>
          <img src={Plus} alt="plus icon" className="plus" />
        </OpenTag>
        {modalOpen && (
          <TagModal
            setModalOpen={setModalOpen}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        {modalOpen ? (
          <Tag type="button"></Tag>
        ) : (
          <Tag type="button">{category[selected]}</Tag>
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

const OpenTag = styled.div`
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

const Tag = styled.div`
  margin-left: 10px;
  width: 90px;
  height: 34px;
  background-color: transparent;
  border: 2px dashed #e1e2e3;
  border-radius: 25px;
  text-align: center;
  padding: 8px 0;
`;

export default PostTag;
