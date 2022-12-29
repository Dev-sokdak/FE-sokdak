import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import myAPI from '../../api/my';
import useToast from '../../hooks/useToast';
import close from '../../assets/close.png';
import camera from '../../assets/camera.png';

// TODO 로그인한 유저 프로필 이미지

const MyprofileModal = ({ setModalOpen }) => {
  const [imageSrc, setImageSrc] = useState(
    'https://static.wanted.co.kr/images/profile_default.png',
  );
  const [file, setFile] = useState('');
  const fileInput = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleUpload = () => {
    fileInput.current.click(); // input type=file이 클릭
  };

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    } else {
      //업로드 취소할 시
      setImageSrc(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      );
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageSrc(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append('profileImage', profileImage);

    await myAPI.setMyProfileImg(formData).then((res) => {
      useToast(`등록되었습니다.`, 'success');
    });
  };

  return (
    <StModalRoot>
      <ModalBackDrop>
        <Modal>
          <ModalHeader>
            <Title>커뮤니티 프로필</Title>
            <CloseBtn onClick={handleClose}>
              <img src={close} alt="close icon" />
            </CloseBtn>
          </ModalHeader>
          <ModalForm>
            <ModalContent>
              <ModalTitle>My 커뮤니티 프로필</ModalTitle>
              <ModalSubTitle>
                속닥 커뮤니티에서 사용되는 프로필입니다.
              </ModalSubTitle>
              <AvatarCrop>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={fileInput} //input에 접근 하기위해 useRef사용
                  onChange={handleChange}
                />
                <MyImage onClick={handleUpload}>
                  <img src={imageSrc} alt="preview-img" />
                </MyImage>
                <CameraIcon onClick={handleUpload}>
                  <img src={camera} alt="camera icon" />
                </CameraIcon>
              </AvatarCrop>
              <ModalBtn>
                <SaveImage onClick={handleSubmit}>저장하기</SaveImage>
              </ModalBtn>
            </ModalContent>
          </ModalForm>
        </Modal>
      </ModalBackDrop>
    </StModalRoot>
  );
};

const StModalRoot = styled.div`
  ${theme.common.flexCenter};
  z-index: 999;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
`;

const ModalBackDrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  ${theme.common.absoluteCenter};
  width: 385px;
  padding: 0;
  overflow: hidden;
  background-color: ${theme.colors.bgColor2};
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 10%);
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 10%);
  padding: 16px 20px;
`;

const ModalHeader = styled.div`
  ${theme.common.flexCenter};
  position: relative;
  height: 62px;
  padding-top: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const CloseBtn = styled.button`
  font-size: 24px;
  color: ${theme.colors.text4};
  position: absolute;
  right: 15px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const ModalForm = styled.div`
  height: 100%;

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 100px;
  max-height: calc(100vh - 242px);
`;

const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-top: 4px;
  margin-bottom: 10px;
`;

const ModalSubTitle = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #888;
`;

const AvatarCrop = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  margin: 30px auto;

  input {
    display: none;
  }
`;

const MyImage = styled.button`
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #d8d8d8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: circle(50% at 50% 50%);
  }
`;

const CameraIcon = styled.button`
  ${theme.common.flexCenter};
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 24px;
  height: 24px;
  background: ${theme.colors.bgColor2};
  ${theme.common.borderLine};
  border-radius: 100%;

  img {
    width: 15px;
    height: 16px;
  }
`;

const ModalBtn = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 15px 20px;
  background: ${theme.colors.bgColor2};
`;

const SaveImage = styled.div`
  ${theme.common.flexCenter};
  width: 100%;
  height: 50px;
  background: ${theme.colors.primary1};
  border-radius: 25px;
  color: ${theme.colors.text5};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

export default MyprofileModal;
