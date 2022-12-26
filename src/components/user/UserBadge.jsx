import styled from 'styled-components';

const UserBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4px;
  height: 19px;
  background: #f6f6f6;
  border-radius: 4px;
  font-weight: 700;
  font-size: 10px;
  line-height: 19px;
  color: #888;

  // 0 웹개발 1 서버 2 프론트 3 QA 4 DevOps
  &[data-id='0'] {
    color: #8958fa;
  }
  &[data-id='1'] {
    color: #5866dc;
  }
  &[data-id='2'] {
    color: #008ae2;
  }
  &[data-id='3'] {
    color: #f07c08;
  }
  &[data-id='4'] {
    color: #8958fa;
  }
`;

export default UserBadge;
