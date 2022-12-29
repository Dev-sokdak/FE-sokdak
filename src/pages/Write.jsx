import React, { useState } from 'react';
import styled from 'styled-components';
import PostTag from '../components/write/PostTag';
import WritePost from '../components/write/WritePost';
import PostImage from '../components/write/PostImage';
import SubmitPost from '../components/write/SubmitPost';
import useToast from '../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import postAPI from '../api/post';

const Write = () => {
  const [tag, setTag] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // 위에서 아래로 순차적이나

    const formData = new FormData(); // 인스턴스 생성

    const json = JSON.stringify({
      // json 문자열로 만들기
      title,
      content,
      tag,
    });

    const blob = new Blob([json], {
      // blob 객체 만들기
      type: 'application/json',
    });

    formData.append('image', imageData);
    formData.append('request', blob);

    // await 통신함수 response가 올 때까지 기다려라
    await postAPI.writePost(formData).then((res) => {
      useToast(`등록되었습니다.`, 'success');
      navigate('/');
    });
  };

  // console.log(imageData); // file
  // useEffect(() => {
  // }, [imageData]);

  return (
    <StLayout>
      <StContainer>
        <SubmitPost
          handleSubmit={handleSubmit}
          disabled={!(tag && title && content)}
        />
        <StWriteWrapper>
          <StWriteContainer>
            <PostTag setTag={setTag} />
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
