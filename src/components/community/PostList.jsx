import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Post from './Post';
import postAPI from '../../api/post';
import useToast from '../../hooks/useToast';

// TODO - 스켈레톤 UI, 인피니트 스크롤
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();

  const getPosts = async (category) => {
    if (category) {
      await postAPI
        .getPostsByCategory(category)
        .then((res) => setPosts(res.data?.content));
    } else {
      await postAPI.getPosts().then((res) => setPosts(res.data?.content));
    }
  };

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    getPosts(currentParams.category);
  }, [searchParams]);

  return (
    <StPostList>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </StPostList>
  );
};

const StPostList = styled.section`
  border: 1px solid #ececec;
  border-top: 0;
  width: 100%;
  background-color: #fff;
`;

export default PostList;
