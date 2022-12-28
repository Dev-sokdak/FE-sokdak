import React, { useState } from 'react';
import styled from 'styled-components';
import DotPostPopUp from './DotPostPopUp';
import DeletePostModal from './DeletePostModal';
import more from '../../../assets/more.png';

const DotPost = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleShowPopUp = () => {
    setShowPopUp(true);
  };

  return (
    <>
      {showPopUp && (
        <DotPostPopUp setShowPopUp={setShowPopUp} setModalOpen={setModalOpen} />
      )}
      {modalOpen && <DeletePostModal setModalOpen={setModalOpen} />}
      <DotPostBtn type="button" onClick={handleShowPopUp}>
        <img src={more} alt="more icon" />
      </DotPostBtn>
    </>
  );
};

const DotPostBtn = styled.div`
  position: absolute;
  right: 7px;
  bottom: -3px;
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

export default DotPost;
