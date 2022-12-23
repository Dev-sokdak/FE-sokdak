import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const Globalstyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}

body{
    font-family: 'pretendard', sans-serif;
  background-color: ${theme.colors.bgColor};

}

a{
    color: inherit;
    text-decoration: inherit;
}
`;

export default Globalstyle;
