import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo_mini.svg';
import useUserInfo from '../../hooks/useUserInfo';
import UserAvatar from '../user/UserAvatar';

const Navbar = () => {
  const navigate = useNavigate();
  const [userInfo, isLoggedIn] = useUserInfo();

  const menuList = [
    { kind: 'jobs', name: '채용' },
    { kind: 'event', name: '이벤트' },
    { kind: 'salary', name: '직군별연봉' },
    { kind: 'resume', name: '이력서' },
    { kind: 'community', name: '커뮤니티' },
    { kind: 'freelancer', name: '프리랜서' },
    { kind: 'aiScore', name: 'AI 합격예측' },
  ];

  const linkToLogin = () => {
    navigate('/login');
  };

  const linkToRegister = () => {
    navigate('/register');
  };

  return (
    <StNavbar>
      <Mainbar>
        <MainNav>
          <LogoBox>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </LogoBox>
          <MenuList>
            {menuList.map((menu) => (
              <Menu className="selected" key={menu.kind}>
                <Link to="/">{menu.name}</Link>
              </Menu>
            ))}
          </MenuList>
          <Aside>
            {isLoggedIn ? (
              <Link to="/my">
                <UserAvatar image={userInfo.profileImage} />
              </Link>
            ) : (
              <ul>
                <li>
                  <button onClick={linkToRegister}>회원가입</button>
                </li>
                <li>
                  <button onClick={linkToLogin}>로그인</button>
                </li>
              </ul>
            )}
          </Aside>
        </MainNav>
      </Mainbar>
    </StNavbar>
  );
};

const StNavbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 800;
`;

const Mainbar = styled.div`
  position: relative;
  max-width: 1060px;
  margin: 0 auto;
  height: 50px;
`;

const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  list-style: none;
  height: inherit;
  text-align: center;
  margin: 0;
`;

const Menu = styled.li`
  height: inherit;
  display: inline-block;

  & .selected {
    -webkit-box-shadow: inset 0 -2px #258bf7;
    box-shadow: inset 0 -2px #258bf7;
  }

  & :hover {
    -webkit-box-shadow: inset 0 -2px #dddddd;
    box-shadow: inset 0 -2px #dddddd;
  }

  a {
    position: relative;
    vertical-align: middle;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    display: inline-block;
    text-decoration: inherit;
    cursor: pointer;
  }
`;

const Aside = styled.aside`
  height: 100%;
  padding: 10px 0;
  margin-right: 6px;
  line-height: 1.4;
  display: inline-flex;

  & ul li {
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  & ul li > * {
    padding: 0 10px;
    height: 100%;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }
}
`;

export default Navbar;
