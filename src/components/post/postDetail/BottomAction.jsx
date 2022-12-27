import React from 'react';
import styled from 'styled-components';
import Action from '../aside/Action';

const BottomAction = ({ data }) => {
  return (
    <StBottomAction>
      <Action data={data} style={{ padding: '0 -6px' }} />
    </StBottomAction>
  );
};

const StBottomAction = styled.div`
  width: 160px;
  margin-right: auto;
  padding: 0 -6px;
`;

export default BottomAction;
