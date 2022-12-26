import React from 'react';
import styled from 'styled-components';

const Category = () => {
  const category = [
    { code: 0, name: '개발' },
    { code: 1, name: 'IT/기술' },
    { code: 2, name: '디자인' },
    { code: 3, name: '경영/전략' },
    { code: 4, name: 'CS/CX' },
    { code: 5, name: 'MD' },
    { code: 6, name: 'HR' },
  ];
  return (
    <InterestCategory>
      <TagBox>
        <TagButton>전체</TagButton>
        {category.map((item) => (
          <TagButton
            className={item.code === 0 ? 'selected' : ''}
            key={item.code}
          >
            {item.name}
          </TagButton>
        ))}
      </TagBox>
    </InterestCategory>
  );
};

const InterestCategory = styled.div`
  width: 790px;
  position: relative;
  top: auto;
  margin: 0;
  border: 1px solid #e1e2e3;
  border-radius: 5px 5px 0 0;
  display: flex;
  position: fixed;
  background-color: #fff;
  padding: 0;
  z-index: 1;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 8px;
  gap: 8px;
  padding-bottom: 0.5px;
  width: 100%;
  padding: 19px 20px;
`;

const TagButton = styled.button`
  &.selected {
    border-color: #36f;
    color: #36f;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 40px;
  padding: 9px 22px;
  font-weight: 600;
  font-size: 15px;
  vertical-align: middle;
  outline: none;
  color: #888;
  border: 1px solid #ececec;
  background-color: #fff;
  border-radius: 25px;
  cursor: pointer;

  &:not(.selected):hover {
    background-color: #f0f0f0;
  }
`;

export default Category;
