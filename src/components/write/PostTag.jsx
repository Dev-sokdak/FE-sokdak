import React from 'react';
import styled from 'styled-components';
import Plus from '../../assets/plus.png';

const PostTag = () => {
  return (
    <StPostTag>
      <div className="tagMessage">
        태그 선택<span>(1개)</span>
        <em>*</em>
      </div>
      <div className="tagWrapper">
        <button type="button" className="openTag">
          <img src={Plus} className="plus" />
        </button>
        <button type="button" className="selectedTag" />
        <div className="tagSlider">{/* 선택된 태그들이 들어갈 자리 */}</div>
      </div>
    </StPostTag>
  );
};

// 태그 영역
const StPostTag = styled.div`
  margin-bottom: 50px;
  .StTagPanel {
  }

  .tagMessage {
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
  }

  .tagWrapper {
    display: flex;

    button {
      border: 0;
      cursor: pointer;
    }

    .openTag {
      width: 34px;
      height: 34px;
      border-radius: 50%;
    }

    .plus {
      height: 50%;
    }

    .selectedTag {
      margin-left: 10px;
      width: 84px;
      height: 34px;
      background-color: transparent;
      border: 2px dashed #e1e2e3;
      border-radius: 25px;
    }
  }

  // tag 선택하면 나타나는 영역(수정 필요)
  .tagSlider {
    width: 100%;
    display: flex;
    /* position: relative; */
  }
`;

export default PostTag;
