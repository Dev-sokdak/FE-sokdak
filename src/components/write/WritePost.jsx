import React from 'react';
import styled from 'styled-components';

const WritePost = ({ title, setTitle, content, setContent }) => {
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <StTitle>
        <textarea
          className="title"
          name="title"
          value={title}
          onChange={handleTitle}
          placeholder="제목을 입력해주세요"
        />
      </StTitle>
      <StContent>
        <textarea
          className="content"
          name="content"
          value={content}
          onChange={handleContent}
          placeholder="내용을 입력해주세요"
        />
      </StContent>
    </>
  );
};

// 제목 입력
const StTitle = styled.div`
  width: 100%;
  padding-bottom: 21px;
  border-bottom: 2px solid #e1e2e3;

  .title {
    width: 100%;
    height: 38px;
    padding: 0;
    border: 0;
    outline: 0;
    resize: none;
    overflow: hidden;
    background-color: transparent;
    // 글자
    font-size: 28px;
    font-weight: 700;
    line-height: 28px; // placeholder 세로 중앙 정렬
    color: ${({ theme }) => theme.colors.text2};
    ::placeholder {
      color: ${({ theme }) => theme.colors.text3};
      font-weight: 400;
    }
  }
`;

// 내용 입력
const StContent = styled.div`
  width: 100%;
  padding-top: 28px;
  font-size: 17px;
  font-weight: 400;

  .content {
    width: 100%;
    height: 38px;
    padding: 0;
    border: 0;
    outline: 0;
    resize: none;
    overflow: hidden;
    background-color: transparent;
    // 글자
    font-size: 17px;
    font-weight: 400;
    line-height: 17px; // placeholder 세로 중앙 정렬
    color: ${({ theme }) => theme.colors.text2};
    ::placeholder {
      color: ${({ theme }) => theme.colors.text3};
      font-weight: 400;
    }
  }
`;

export default WritePost;
