import React, { useState } from 'react';
import styled from 'styled-components';
import Photo from '../../assets/picture.png';
import Close from '../../assets/cancel.png';

const PostImage = () => {
  const [visible, setVisible] = useState(false); // preview 삭제 버튼
  const [imageSrc, setImageSrc] = useState(''); // preview

  const encodeFile = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();

        // console.log(reader.result.split(',')[1]);
      };
    });
  };

  const handleImageUpload = (event) => {
    encodeFile(event.target.files[0]);

    setVisible(!false);
  };

  // preview 삭제 <- state 비우기
  const handleImageDelete = () => {
    setImageSrc(null);
    setVisible(false);
  };

  return (
    <>
      <ShowImage>
        <ImgPreview>
          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </ImgPreview>
        {visible && (
          <button
            type="button"
            className="removePhoto"
            onClick={handleImageDelete}
          >
            <img src={Close} alt="close icon" />
          </button>
        )}
      </ShowImage>
      <StUploadImage>
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
      </StUploadImage>
    </>
  );
};

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

const ShowImage = styled.div`
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

// 사진 업로드
const StUploadImage = styled.div`
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

export default PostImage;
