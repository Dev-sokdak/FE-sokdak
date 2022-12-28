import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Like from '../../assets/gray-like.svg';
import BlueLike from '../../assets/blue-like.svg';
import Comment from '../../assets/gray-comment.svg';
import BlueComment from '../../assets/blue-comment.svg';
import UserAvatar from '../user/UserAvatar';
import UserBadge from '../user/UserBadge';
import PostTagList from '../post/PostTagList';
import { elapsedTime } from '../../utils/date';
import { jobTag, career } from '../../utils/code';

const Post = ({ post }) => {
  return (
    <PostItem>
      <PostItemTop>
        <AuthorBox>
          <AvatarWrapper>
            <UserAvatar image={post.image} />
          </AvatarWrapper>
          <VerticalBox>
            <AuthorInfo>
              <AuthorName>{post.nickname}</AuthorName>
              <AuthorCareer>
                {post.userJobTag !== 999 ? (
                  <UserBadge className="jobtag">
                    {jobTag[post.userJobTag]}
                  </UserBadge>
                ) : (
                  ''
                )}
                {post.userCareerTag !== 999 ? (
                  <UserBadge className="career" data-id={post.userCareerTag}>
                    {career[post.userCareerTag]}
                  </UserBadge>
                ) : (
                  ''
                )}
              </AuthorCareer>
            </AuthorInfo>
            <CreatedAt>{elapsedTime(post.createdAt)}</CreatedAt>
          </VerticalBox>
        </AuthorBox>
      </PostItemTop>
      <PostItemLink to={`/post/${post.id}`} preventScrollReset>
        <PostTitle>{post.title}</PostTitle>
        <PostContent>{post.content}</PostContent>
        <PostTagList tag={post.category} />
        <PostItemBottom>
          <IconBox className="likes-box">
            <img src={post.boardLikeUserId ? BlueLike : Like} alt="likes" />
            <span>{post.likeCnt}</span>
          </IconBox>
          <IconBox className="comments-box">
            <img
              src={post.commentIncluding ? BlueComment : Comment}
              alt="comments"
            />
            <span>{post.commentCnt}</span>
          </IconBox>
        </PostItemBottom>
      </PostItemLink>
    </PostItem>
  );
};

const PostItem = styled.article`
  position: relative;
  padding: 29px 29px 30px;
  display: block;
  margin-bottom: 2px;

  &:not(:last-of-type):after {
    display: block;
    content: '';
    height: 1px;
    background-color: #ececec;
    position: absolute;
    bottom: -1px;
    width: 730px;
  }
`;

const PostItemTop = styled.div`
  display: flex;
  margin-bottom: 9px;
  max-width: 399px;
`;

const AuthorBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
`;

const AvatarWrapper = styled.div`
  margin-right: 7px;
`;

const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorInfo = styled.div`
  display: flex;
  margin-bottom: 3px;
  align-items: center;
`;

const AuthorName = styled.div`
  font-size: 13px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 4px;
`;

const AuthorCareer = styled.div`
  display: flex;
  white-space: nowrap;

  & :not(:last-child) {
    margin-right: 4px;
  }
`;

const CreatedAt = styled.div`
  font-size: 12px;
  color: #939393;
  line-height: 100%;
  white-space: nowrap;
`;

const PostItemLink = styled(Link)`
  width: 730px;
  padding-left: 35px;
`;

const PostTitle = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
  line-height: 23px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PostContent = styled.p`
  font-size: 14px;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.43;
  text-overflow: ellipsis;
  white-space: break-spaces;
  word-break: break-all;
  overflow: hidden;
  margin-bottom: 10px;
  min-height: 40px;
`;

const PostItemBottom = styled.div`
  display: flex;
`;

const IconBox = styled.div`
  display: flex;
  color: #666;
  align-items: center;

  span {
    font-size: 12px;
    margin-left: 4px;
    padding: 0.3em 0 0;
    font-weight: 700;
  }

  &:not(:first-child) {
    margin-left: 9px;
  }
`;

export default Post;
