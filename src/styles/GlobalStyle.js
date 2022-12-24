import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const Globalstyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
}

body {
    font-family: 'pretendard', sans-serif;
    background-color: ${theme.colors.bgColor};
}

ol, ul {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: inherit;
}

img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
}
`;

export default Globalstyle;
