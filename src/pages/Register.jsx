import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo_mini.svg';

const Register = () => {
  const [input, setInput] = useState({ email: '', password: '', confirm: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleRegister = () => {
    if (input.email === '' || input.password === '' || input.confirm === '') {
      alert('모두 입력해주세요');
    }
  };

  return (
    <StLayout>
      <StContainer>
        <StRegister>
          <Top>
            <StLogo>
              <img src={Logo} alt="logo" />
            </StLogo>
          </Top>
          <Main>
            <form>
              <h1>회원가입</h1>
              <div className="StLabel">
                <label>이메일</label>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  name="email"
                  className="emailInput input"
                  value={input.email}
                  onChange={handleChange}
                />
                <button className="emailBtn btn">중복확인</button>
              </div>
              form help text
              <div className="StLabel">
                <label>비밀번호</label>
              </div>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                name="password"
                className="pwInput input"
                value={input.password}
                onChange={handleChange}
              />
              form help text
              <div className="StLabel">
                <label>비밀번호 확인</label>
              </div>
              <input
                type="password"
                placeholder="비밀번호를 다시 입력해주세요."
                name="confirm"
                className="confirmPwInput input"
                value={input.confirm}
                onChange={handleChange}
              />
              form help text
              <button
                type="submit"
                className="registerBtn btn"
                onClick={handleRegister}
              >
                회원가입
              </button>
            </form>
          </Main>
        </StRegister>
      </StContainer>
    </StLayout>
  );
};

const StLayout = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
`;

const StContainer = styled.div`
  ${({ theme }) => theme.common.absoluteCenter}
  max-width: 600px;
  min-height: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const StRegister = styled.div`
  border-radius: 5px;
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  ${({ theme }) => theme.common.borderLine};
  padding: 10px;
  justify-content: space-between;
`;

const Top = styled.div`
  padding: 20px;
  height: 64px;
  width: 100%;
`;

const StLogo = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;

const Main = styled.div`
  overflow: auto;
  position: relative;
  padding: 20px;
  min-height: 600px;

  h1 {
    color: ${({ theme }) => theme.colors.text1};
    font-weight: 700;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.title};
    line-height: 38px;
  }

  .StLabel {
    margin: 24px 0px 7px;
  }

  label {
    color: #888;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0145em;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
    line-height: 20px;
  }

  .inputBox {
    ${({ theme }) => theme.common.flexBetween}
  }

  .input {
    width: 100%;
    height: 50px;
    min-height: 50px;
    padding: 0px 12px;
    margin-bottom: 10px;
    outline: none;
    background-color: transparent;
    ${({ theme }) => theme.common.borderLine}
    color: ${({ theme }) => theme.colors.text2};
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
  }

  .btn {
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    background-color: #f2f4f7;
    border: none;
    cursor: default;
    // 글자
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.0056em;
    line-height: 24px;
    color: #ccc;
  }

  .btn:active {
    /* border: none; */
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.text5};
  }

  .emailBtn {
    max-width: 100px;
    margin-left: 10px;
  }

  .registerBtn {
    margin-bottom: 10px;
    margin-top: 30px;
  }
`;

export default Register;
