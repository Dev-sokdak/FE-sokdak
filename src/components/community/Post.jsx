import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Like from '../../assets/gray-like.svg';
import Comment from '../../assets/gray-comment.svg';
import UserAvatar from '../user/UserAvatar';
import UserBadge from '../user/UserBadge';

const Post = () => {
  return (
    <PostItem>
      <PostItemTop>
        <AuthorBox>
          <AvatarWrapper>
            <UserAvatar />
          </AvatarWrapper>
          <VerticalBox>
            <AuthorInfo>
              <AuthorName>미사동 똑띠</AuthorName>
              <AuthorCareer>
                <UserBadge className="jobtag">개발</UserBadge>
                <UserBadge className="career" data-id="0">
                  신입
                </UserBadge>
              </AuthorCareer>
            </AuthorInfo>
            <CreatedAt>2시간 전</CreatedAt>
          </VerticalBox>
        </AuthorBox>
      </PostItemTop>
      <PostItemLink to="/post/123">
        <PostTitle>12월 원티드살롱 리뷰</PostTitle>
        <PostContent>
          안녕하세요, 2022년 마지막 원티드살롱의 5조 공동리더를 맡았던 개발자
          김민준이에요~!저희 5조는 저를 제외한 분들이 전부 현업에서 서비스기획
          및 PM/PO 를 담당해오신 멋진 분들이셨어요. PM을 꿈꾸는 저에게는 정말
          귀한 경험이었고, 그 경험을 여러분들께도 공유하려 해요. 이번 살롱의
          공통적인 대화 주제는 22년 후기와 23년 목표였어요. 제가 듣고 이해한
          것들을 간략하게 정리해볼게요! #22년 후기 웹 개발자(2년 차) - 담당하는
          업무의 사수가 없어 삽질의 연속이었지만, 스스로 문제를 해결하는 과정을
          통해 성장함 - 지원했던 IT동아리에 전부 떨어졌지만, 지인들과의 스터디를
          직접 조직해 갈증을 해소함 UX Writer(6년 차) - 조직장을 맡으며 조직원을
          성장시키는 경험을 함 - 본인의 현재에 안주하지 않고 끊임없이 성장하기
          위해 이직함 모바일 서비스 기획자(4년 차) - 신사업을 담당해 성공적으로
          런칭했지만, 고도화하며 생기는 수많은 선택이 고민됨 - 데이터분석, PM
          관련 유튜브를 시작해 많은 구독자를 모음 PO(8년 차) - 같은 기획 업무
          안에서도 본인이 진정으로 원하는 방향으로 가기 위해 이직을 함 - 이직과
          관련해 정말 많은 고민이 있었지만, 결국 본인의 선택에 후회는 없음
          PM(15년 차) - 신생 스타트업에 조인해 업무효율을 향상하는 서비스를
          만드는 중 - 일잘러가 되기 위한 끊임없는 고민과 노력을 통해 자신의 삶을
          루틴화해서 컨트롤함 서비스 기획자(3년 차) - SI 위주 기업에서 자체
          서비스를 개발하기 시작했지만, 신사업의 어려움이 많았음 - 본인이 성장할
          수 있는 곳으로 이직에 성공해서 행복함 #23년 목표 웹 개발자(2년 차) -
          재직 중인 회사에서 기획 및 PM 을 경험해보고, 성공적으로 마무리 짓기 UX
          Writer(6년 차) - 조직의 첫 UX Writer 로써 가이드를 만들고, 기여하고,
          알리기 모바일 서비스 기획자(4년 차) - 석사를 도전해야 할지에 대한
          결론을 내리기 PO(8년 차) - 끊임없이 본인이 원하는 게 뭔지 고민해보고
          그 방향으로 직진하기 PM(15년 차) - 좋은 리더가 되기 서비스 기획자(3년
          차) - 이직한 곳에서 1인분 이상을 하는 사람이 되기 저는 이번
          원티드살롱에서 경험 많은 분들의 진지한 조언을 들은 이후, 재직 중인
          회사에 제 생각을 전달하여 신사업 기획에 참여하게 됐어요!! 이대로 잘
          진행만 된다면, PM 역할도 맡을 수 있을 것 같아요. 테이블 인원 배치 /
          맛있는 식사 / 자유로운 분위기 / 민정님의 유려한 진행 등 원티드
          관계자분들의 고민과 노력이 느껴졌어요. 또 참가하고 싶을 정도로
          얻어간게 많은 모임이었네요. 성장하고 싶은 여러분! 원티드살롱에서
          봐요:)
        </PostContent>
        <PostTagList>
          <PostTag>개발</PostTag>
        </PostTagList>
        <PostItemBottom>
          <IconBox className="likes-box">
            <img src={Like} alt="likes" />
            <span>6</span>
          </IconBox>
          <IconBox className="comments-box">
            <img src={Comment} alt="comments" />
            <span>2</span>
          </IconBox>
        </PostItemBottom>
      </PostItemLink>
    </PostItem>
  );
};

const PostItem = styled.article`
  padding: 29px 29px 30px;
  display: block;
  margin-bottom: 2px;
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

const PostTagList = styled.div`
  margin-bottom: 21px;
  display: flex;
`;

const PostTag = styled.button`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 400;
  color: #888;
  height: 26px;
  padding: 0 8px;
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
