import React from 'react';
import styled from 'styled-components';
import more from '../../../assets/more.png';

const EditPost = () => {
  return (
    <StEdit>
      <button type="button">
        <img src={more} alt="more icon" />
      </button>
    </StEdit>
  );
};

const StEdit = styled.div`
  button {
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
  }
`;

export default EditPost;
