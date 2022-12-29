import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AsideUser from '../components/post/aside/AsideUser';
import Action from '../components/post/aside/Action';
import PostLayout from '../components/post/PostLayout';
import { useSelector } from 'react-redux';
import postAPI from '../api/post';

const Post = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const redirect = () => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  };

  const getDetails = async (id) => {
    await postAPI.getPostDetail(id).then((res) => setDetails(res.data));
  };

  useEffect(() => {
    redirect();
  }, []);

  useEffect(() => {
    getDetails(id);
  }, []);

  return (
    <StLayout>
      <StAside>
        <StAsideBox>
          <AsideUser data={details} />
          <Action data={details} />
        </StAsideBox>
      </StAside>
      <PostLayout data={details} />
    </StLayout>
  );
};

const StLayout = styled.div`
  display: flex;
  width: 1070px;
  margin: 80px auto 0;
  padding-top: 60px;
`;

const StAside = styled.div`
  flex: 0 0 180px;
  margin-right: 100px;
`;

const StAsideBox = styled.div`
  position: sticky;
  top: 165px;
`;

export default Post;
