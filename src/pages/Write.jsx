import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from '../assets/plus.png';
import Photo from '../assets/picture.png';
import Close from '../assets/cancel.png';

const Write = () => {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFile = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleImageUpload = (event) => {
    encodeFile(event.target.files[0]);
  };

  const handleImagedelete = (clickedImage) => {
    const dataTranster = new DataTransfer();

    Array.from(files)
      .filter((file) => file !== clickedImage)
      .forEach((file) => {
        dataTranster.items.add(file);
      });

    setFiles(dataTranster.files);
  };

  return (
    <StLayout>
      <Main>
        <form>
          <StHeader>
            <div className="headerContainer">
              <div className="header">
                <button type="submit" className="writeBtn">
                  등록하기
                </button>
              </div>
            </div>
          </StHeader>
          <StWrite>
            <div className="writeContainer">
              <div className="StTagPanel">
                <div className="tagMessage">
                  태그 선택<span>(1~3개)</span>
                  <em>*</em>
                </div>
                <div className="tagWrapper">
                  <button type="button" className="openTag">
                    <img src={Plus} className="plus" />
                  </button>
                  <button type="button" className="selectedTag" />
                  <div className="tagSlider">
                    {/* 선택된 태그들이 들어갈 자리 */}
                  </div>
                </div>
              </div>
              <StTitle>
                <textarea
                  className="title"
                  name="title"
                  placeholder="제목을 입력해주세요"
                />
              </StTitle>
              <StContent>
                <textarea
                  className="content"
                  name="content"
                  placeholder="내용을 입력해주세요"
                />
              </StContent>
              <ShowPhoto>
                <ImgPreview>
                  {imageSrc && <img src={imageSrc} alt="preview-img" />}
                </ImgPreview>
                <button
                  type="button"
                  className="removePhoto"
                  onClick={handleImagedelete}
                >
                  <img src={Close} alt="close icon" />
                </button>
              </ShowPhoto>
            </div>
          </StWrite>
        </form>
        <StPhoto>
          <input
            type="file"
            accept="image/*"
            id="input-file"
            className="invisible"
            onChange={handleImageUpload}
          />
          <div className="photoBox">
            <label className="uploadPhoto" htmlFor="input-file">
              <img src={Photo} alt="photo icon" />
            </label>
          </div>
        </StPhoto>
      </Main>
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

const Main = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

// 상단 헤더(등록하기 버튼)
const StHeader = styled.div`
  position: fixed;
  top: 50px;
  z-index: 10;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.bgColor2};
  ${({ theme }) => theme.common.borderLine};

  .headerContainer {
    ${({ theme }) => theme.common.flexBetween}
    max-width: 1060px;
    margin: 0 auto;
    height: 100%;
    padding: 10px 0;
  }

  .header {
    ${({ theme }) => theme.common.flexCenter}
    width: 135px;
    height: 40px;
    margin-left: auto;
  }

  .writeBtn {
    width: 100%;
    min-width: 64px;
    height: 40px;
    padding: 0 27px;
    background-color: #f2f4f7;
    border: none;
    border-radius: 25px;
    cursor: default;
    font-size: 15px;
    font-weight: 700;
    color: #ccc;
  }

  .writeBtn:active {
    background-color: #36f;
    color: #fff;
  }
`;

// 글쓰기 영역
const StWrite = styled.div`
  position: relative; // 사진 위치 고정 위함
  width: 100%;
  padding-top: 109px; // nav+header height -1px

  .writeContainer {
    display: flex;
    flex-direction: column;
    max-width: 790px;
    min-height: calc(100vh - 110px);
    padding: 39px 40px;
    margin: 0 auto;
    border-top: 0;
    background-color: ${({ theme }) => theme.colors.bgColor2};
    ${({ theme }) => theme.common.borderLine}
  }

  // 태그 영역
  .StTagPanel {
    margin-bottom: 50px;
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

// 사진 업로드
const StPhoto = styled.div`
  // input 안 보이게 하고 photoBtn으로 대체
  .invisible {
    display: none;
  }

  // 업로드 버튼 넣을 영역 확보
  .photoBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 790px;
    height: 100%;
    margin: 0 auto;
    pointer-events: none;
  }

  .uploadPhoto {
    ${({ theme }) => theme.common.flexCenterColumn}
    position: absolute;
    right: 38px;
    bottom: 60px;
    width: 50px;
    height: 50px;
    ${({ theme }) => theme.common.borderLine}
    background-color: ${({ theme }) => theme.colors.bgColor2};
    border-radius: 50%;
    -webkit-filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.1));
    filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.1));
    pointer-events: all;
    color: #333;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

// 사진 프리뷰
const ImgPreview = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  padding: 30px;

  img {
    width: 100%;
  }
`;

const ShowPhoto = styled.div`
  position: relative;

  .removePhoto {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 22px;
    height: 22px;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    img {
      width: 22px;
      height: 22px;
    }
  }
`;

export default Write;
