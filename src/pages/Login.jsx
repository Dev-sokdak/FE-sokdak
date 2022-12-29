import React, { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import LogoLogin from '../assets/logo_login.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import KakaoLoginBtn from '../components/login/KakaoLoginBtn';
import authAPI from '../api/auth';
import useToast from '../hooks/useToast';
import { setCookie } from '../utils/cookies';

const schema = yup.object().shape({
  email: yup.string().email('올바른 이메일을 입력해주세요.').required(''),
  password: yup.string().required('비밀번호를 입력해주세요.'),
});

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const code = searchParams.get('code');

  const handleLogin = async (data) => {
    await authAPI
      .Login({ userId: data.email, password: data.password })
      .then((res) => {
        if (res.data.statusCode === 200) {
          setCookie(res.headers.authorization);
          useToast(`${res.data.msg}`, 'success');
          navigate('/');
        } else {
          useToast(`${res.data.msg}`, 'error');
        }
      })
      .catch((error) => useToast('에러가 발생했습니다.', 'error'));
  };

  const KakaoLogin = async (code) => {
    await authAPI
      .KakaoLogin(code)
      .then((res) => {
        if (res.data.statusCode === 200) {
          setCookie(res.headers.authorization);
          useToast(`${res.data.msg}`, 'success');
          navigate('/');
        } else {
          useToast(`${res.data.msg}`, 'error');
        }
      })
      .catch((error) => useToast('에러가 발생했습니다.', 'error'));
  };

  useEffect(() => {
    if (code) {
      KakaoLogin(code);
    }
  }, [code]);

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
            <form onSubmit={handleSubmit(handleLogin)}>
              <Title>로그인</Title>
              <StLabel>
                <label>이메일</label>
              </StLabel>
              <StInput
                name="email"
                placeholder="이메일을 입력해주세요."
                className={errors.email ? 'error' : ''}
                {...register('email', { required: true })}
              />
              <Typography>{errors.email?.message}</Typography>
              <StLabel>
                <label>비밀번호</label>
              </StLabel>
              <StInput
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className={errors.password ? 'error' : ''}
                {...register('password', { required: true })}
              />
              <Typography>{errors.password?.message}</Typography>
              <StButton type="submit" className="loginBtn" disabled={!isValid}>
                로그인
              </StButton>
              <Link to="/register">
                <Caption>회원가입</Caption>
              </Link>
              <KakaoLoginBtn />
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
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text1};
  font-weight: 700;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: 38px;
`;

const StLabel = styled.div`
  margin: 24px 0px 7px;

  label {
    color: #888;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0145em;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
    line-height: 20px;
  }
`;

const StInput = styled.input`
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

  &:focus {
    border: 1px solid #36f;
  }

  &.error {
    border: 1px solid #fe415c;
  }
`;

const StButton = styled.button`
  width: 100%;
  height: 50px;
  min-height: 50px;
  border-radius: 25px;
  border: none;
  cursor: default;
  // 글자
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.0056em;
  line-height: 24px;
  background-color: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.text5};
  cursor: pointer;

  &:disabled {
    background-color: #f2f4f7;
    color: #ccc;
  }

  &.loginBtn {
    margin: 30px 0 10px 0;
  }
`;

const Typography = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  margin-bottom: 8px;
  margin-top: 0px;
  color: #fe415c;
`;

const Caption = styled.p`
  color: #939393;
  font-weight: 600;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
  margin-bottom: 40px;
  text-decoration: underline;
`;

export default Login;
