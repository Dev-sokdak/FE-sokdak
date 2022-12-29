import React from 'react';
import styled from 'styled-components';
import MyWrapper from '../components/my/MyWrapper';

const My = () => {
  return (
    <StLayout>
      <MyWrapper />
    </StLayout>
  );
};

const StLayout = styled.div`
  display: flex;
  width: 791px;
  margin: 0 auto;
  padding-top: 120px;
`;

export default My;
