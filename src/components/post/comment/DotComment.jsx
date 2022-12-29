import React, { useState } from 'react';
import styled from 'styled-components';
import DotCommentPopUp from './DotCommentPopUp';
import DeleteCommentModal from './DeleteCommentModal';
import more from '../../../assets/more.png';

const DotComment = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <StDotComment>
      {showPopUp && (
        <DotCommentPopUp
          setShowPopUp={setShowPopUp}
          setModalOpen={setModalOpen}
        />
      )}
      {modalOpen && <DeleteCommentModal setModalOpen={setModalOpen} />}
      <DotCommentBtn type="button" onClick={handleShowPopUp}>
        <img src={more} alt="more icon" />
      </DotCommentBtn>
    </StDotComment>
  );
};

const StDotComment = styled.div`
  margin-left: auto;
  position: relative;
  display: flex;
`;

const DotCommentBtn = styled.div`
  height: 18px;
  color: #767676;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }
`;

export default DotComment;
