import React, { useState } from 'react';
import useDidMountEffect from '../hooks/useDidMountEffect';
import styled from 'styled-components';
import Logo from '../assets/logo_mini.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('이메일형식이 적합하지 않습니다.')
    .required('이메일을 인증해주세요'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자리입니다')
    .max(16, '비밀번호는 최대 16자리입니다')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
      '공백을 제외한 특수문자, 알파벳, 숫자를 포함하여 입력해주세요',
    )
    .required('비밀번호를 입력해주세요'),
  confirmPw: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
    .required('비밀번호를 한번 더 입력해주세요'),
});

const Register = () => {
  // 이메일 유효 여부
  const [emailValid, setEmailValid] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickLogin = (data) => {
    console.log(data);
  };

  const checkDuplicated = () => {
    // TODO - 이메일 중복 체크 API 연동
    setEmailValid(true);
  };

  useDidMountEffect(() => {
    if (!emailValid) {
      setError('email', { type: 'custom', message: '사용중인 이메일입니다.' });
    } else {
      clearErrors('email', { type: 'custom' });
    }
  }, [emailValid]);

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
            <form onSubmit={handleSubmit(onClickLogin)}>
              <h1>회원가입</h1>
              <div className="StLabel">
                <label>이메일</label>
              </div>
              <div className="inputBox">
                <input
                  id="email"
                  name="email"
                  placeholder="이메일을 입력해주세요."
                  className="emailInput input"
                  {...register('email', { required: true })}
                />
                <button
                  disabled={!getValues('email') || errors.email}
                  className="emailBtn btn"
                  onClick={checkDuplicated}
                >
                  중복확인
                </button>
              </div>
              <Typography>
                {errors.emailCheck?.message || errors.email?.message}
              </Typography>
              <div className="StLabel">
                <label>비밀번호</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                className="pwInput input"
                {...register('password', { required: true })}
              />
              <Typography>{errors.password?.message}</Typography>
              <div className="StLabel">
                <label>비밀번호 확인</label>
              </div>
              <input
                type="password"
                name="confirmPw"
                placeholder="비밀번호를 다시 입력해주세요."
                className="confirmPwInput input"
                {...register('confirmPw', { required: true })}
              />
              <Typography>{errors.confirmPw?.message}</Typography>
              <button
                disabled={!isValid}
                type="submit"
                className="registerBtn btn"
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
  max-width: 400px;
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
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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
  }

  .btn:disabled {
    background-color: #f2f4f7;
    color: #ccc;
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

const Typography = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  margin-bottom: 8px;
  margin-top: 0px;
  color: #fe415c;
`;

export default Register;
