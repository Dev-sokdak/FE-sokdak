import React, { useState, useDispatch } from 'react';
import styled from 'styled-components';
import Photo from '../../assets/picture.png';
import Close from '../../assets/cancel.png';

const PostImage = ({ setImageData }) => {
  const [visible, setVisible] = useState(false); // preview 삭제 버튼
  const [imageSrc, setImageSrc] = useState(''); // preview

  // formData 객체 안에 key: value 형태로 들어감 첫번째인자 key해당하는 이름 value값 세번째는 option - type을 application json형식으로 설정

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
    setVisible(!false);
    setImageData(event.target.files[0]);
  };

  // preview 삭제 <- state 비우기
  const handleImageDelete = () => {
    setImageSrc(null);
    setVisible(false);
  };

  return (
    <>
      <StShowImage>
        <ImgPreview>
          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </ImgPreview>
        {visible && (
          <RemovePreview onClick={handleImageDelete}>
            <img src={Close} alt="close icon" />
          </RemovePreview>
        )}
      </StShowImage>
      <Input
        type="file"
        accept="image/*"
        id="input-file"
        className="invisible"
        onChange={handleImageUpload}
      />
      <StUploadBox>
        <UploadImage htmlFor="input-file">
          <img src={Photo} alt="photo icon" />
        </UploadImage>
      </StUploadBox>
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

const StShowImage = styled.div`
  position: relative;
`;

const RemovePreview = styled.button`
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
`;

const Input = styled.input`
  display: none;
`;

const StUploadBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 790px;
  height: 100%;
  margin: 0 auto;
  pointer-events: none;
`;

const UploadImage = styled.label`
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
`;

export default PostImage;
