import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { jobTag } from '../../utils/code';
import { career } from '../../utils/code';
import myAPI from '../../api/my';
import theme from '../../styles/theme';
import useToast from '../../hooks/useToast';

const MyTag = ({ userInfo }) => {
  const navigate = useNavigate();
  const [jobSelected, setJobSelected] = useState(userInfo.jobTag);
  const [careerSelected, setCareerSelected] = useState(userInfo.careerTag);

  const handleJobTag = (e) => {
    setJobSelected(e.target.value);
  };

  const handleCareerTag = (e) => {
    setCareerSelected(e.target.value);
  };

  const handleSubmit = async () => {
    const tags = {
      userJobTag: jobSelected,
      userCareerTag: careerSelected,
    };
    await myAPI.setMyJobTag(tags).then((res) => {
      useToast(`등록되었습니다.`, 'success');
      navigate('/');
    });
  };

  return (
    <StMyTag>
      <StHeader>
        <Title>전문분야 설정</Title>
      </StHeader>
      <StForm>
        <StFormContainer>
          <StTag>
            <SubTitle>직무</SubTitle>
            <SelectBox>
              <select value={jobSelected} onChange={handleJobTag}>
                {Object.entries(jobTag).map((item) => (
                  <Option key={item[0]} value={item[0]}>
                    {item[1]}
                  </Option>
                ))}
              </select>
            </SelectBox>
          </StTag>
          <StTag>
            <SubTitle>경력</SubTitle>
            <SelectBox>
              <select value={careerSelected} onChange={handleCareerTag}>
                {Object.entries(career).map((item) => (
                  <Option key={item[0]} value={item[0]}>
                    {item[1]}
                  </Option>
                ))}
              </select>
            </SelectBox>
          </StTag>
          <MyPageBtn onClick={handleSubmit}>완료</MyPageBtn>
        </StFormContainer>
      </StForm>
    </StMyTag>
  );
};

const StMyTag = styled.div`
  padding: 41px 0 30px;
  ${theme.common.borderLine};
  border-radius: 3px;
  background-color: ${theme.colors.bgColor2};
  margin-top: 10px;
`;

const StHeader = styled.div`
  padding-right: 30px;
  padding-left: 30px;
`;

const Title = styled.div`
  width: 150px;
  color: ${theme.colors.text2};
  font-size: ${theme.fontSizes.subtitle};
  font-weight: 600;
  line-height: 1;
`;

const StForm = styled.div`
  margin-top: 43px;
`;

const MyPageBtn = styled.button`
  ${theme.common.flexCenter};
  width: 140px;
  height: 40px;
  ${theme.common.borderLine};
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 600;
  color: ${theme.colors.text2};
  background: none;
  cursor: pointer;
  margin-top: 16px;
  margin-left: auto;

  &:active {
    background-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.text5};
  }
`;

const StFormContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
`;

const StTag = styled.div`
  display: block;
  position: relative;
  padding: 15px 0;
  color: #999;
`;

const SubTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 16px;
  width: 150px;
`;

const SelectBox = styled.div`
  position: relative;

  select {
    width: calc(100% - 150px);
    padding: 14px 20px;
    margin-left: 150px;
    color: #999;
    font-size: 16px;
    font-weight: 400;
    border: 0;
    border-radius: 3px;
    background-color: #f8f8fa;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

const Option = styled.option`
  width: calc(100% - 150px);
  padding: 14px 20px;
  margin-left: 150px;
  color: #999;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  border-radius: 3px;
  background-color: #f8f8fa;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export default MyTag;
