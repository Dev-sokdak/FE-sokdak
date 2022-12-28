import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import postAPI from '../../api/post';
import useToast from '../../hooks/useToast';

// TODO - 지역별 GET ,스켈레톤 UI, 인피니트 스크롤
const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await postAPI
      .getPosts()
      .then((res) => setPosts(res.data.content))
      .catch((error) => useToast('정보를 가져올 수 없습니다.', 'error'));
  };

  useEffect(() => {
    getPosts();
  }, []);

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
