import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { category } from '../../utils/code';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState('');

  const handleClick = (event) => {
    setSelected(event.target.id);
  };

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSelected(currentParams.category ?? '전체');
  }, []);

  useEffect(() => {
    selected === '전체'
      ? setSearchParams()
      : setSearchParams({ category: selected });
  }, [selected]);

  return (
    <InterestCategory>
      <TagBox>
        <TagButton
          className={'전체' === selected ? 'selected' : ''}
          id="전체"
          onClick={handleClick}
        >
          전체
        </TagButton>
        {Object.entries(category).map((item) => (
          <TagButton
            className={item[0] === selected ? 'selected' : ''}
            key={item[0]}
            id={item[0]}
            onClick={handleClick}
          >
            {item[1]}
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
  padding: 9px 18px;
  font-weight: 600;
  font-size: 14px;
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
