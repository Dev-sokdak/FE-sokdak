import React, { useState } from 'react';
import styled from 'styled-components';
import PostTag from '../components/write/PostTag';
import WritePost from '../components/write/WritePost';
import PostImage from '../components/write/PostImage';
import SubmitPost from '../components/write/SubmitPost';
import useToast from '../hooks/useToast';
import { useNavigate, useLocation } from 'react-router-dom';
import postAPI from '../api/post';

const Write = () => {
  const location = useLocation();
  const { data, isEdit } = location.state;
  const navigate = useNavigate();

  const [tag, setTag] = useState(data.category);
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [imageData, setImageData] = useState(null);

  console.log(tag, title, content);
  const handleSubmit = async () => {
    const formData = new FormData();
    const json = JSON.stringify({
      title,
      content,
      tag,
    });

    const blob = new Blob([json], {
      type: 'application/json',
    });

    formData.append('image', imageData);
    formData.append('request', blob);

    if (isEdit) {
      await postAPI.editPost(formData).then((res) => {
        useToast('수정되었습니다.', 'success');
        navigate('/');
      });
    } else {
      await postAPI.writePost(formData).then((res) => {
        useToast('등록되었습니다.', 'success');
        navigate('/');
      });
    }
  };

  return (
    <StLayout>
      <StContainer>
        <SubmitPost
          handleSubmit={handleSubmit}
          disabled={!(tag && title && content)}
        />
        <StWriteWrapper>
          <StWriteContainer>
            <PostTag tag={tag} setTag={setTag} />
            <WritePost
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
            />
            <PostImage setImageData={setImageData} />
          </StWriteContainer>
        </StWriteWrapper>
      </StContainer>
    </StLayout>
  );
};

//전체 레이아웃
const StLayout = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
`;

const StContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

// 글쓰기 영역
const StWriteWrapper = styled.div`
  position: relative; // 사진 위치 고정 위함
  width: 100%;
  padding-top: 109px; // nav+header height -1px
`;

const StWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 790px;
  min-height: calc(100vh - 110px);
  padding: 39px 40px;
  margin: 0 auto;
  border-top: 0;
  background-color: ${({ theme }) => theme.colors.bgColor2};
  ${({ theme }) => theme.common.borderLine}
`;

export default Write;
