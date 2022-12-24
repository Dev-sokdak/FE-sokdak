import React, { useState } from 'react';
import styled from 'styled-components';
import LogoLogin from '../assets/logo_login.svg';

const Login = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });

    console.log(input);
  };

  const handleLogin = () => {
    if (input.email === '' || input.password === '') {
      alert('모두 입력해주세요');
    }
  };

  return (
    <StLayout>
      <StContainer>
        <StLogin>
          <Top>
            <StLogo>
              <img src={LogoLogin} alt="logo" />
            </StLogo>
          </Top>
          <Main>
            <form>
              <h1>로그인</h1>
              <div className="StLabel">
                <label>이메일</label>
              </div>
              <input
                type="email"
                placeholder="이메일을 입력해주세요."
                name="email"
                className="emailInput input"
                value={input.email}
                onChange={handleChange}
              />
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
              <button
                type="submit"
                className="loginBtn btn"
                onClick={handleLogin}
              >
                로그인
              </button>
            </form>
          </Main>
        </StLogin>
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
  max-width: 400px;
  min-height: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const StLogin = styled.div`
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

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Top = styled.div`
  padding: 20px;
  height: 64px;
  width: 100%;
`;

const StLogo = styled.div`
  height: 50px;
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

  .loginBtn {
    margin-top: 30px;
  }
`;

export default Login;
