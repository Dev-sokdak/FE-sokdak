import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MyWrapper from '../components/my/MyWrapper';

const My = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const redirect = () => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  };

  useEffect(() => {
    redirect();
  }, []);

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
