const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(28),
  subtitle: pixelToRem(20),
  paragraph: pixelToRem(14),
};

const colors = {
  text1: '#000000',
  text2: '#333333', // 진한 회색
  text3: '#666666', // 기본 회색
  text4: '#939393', //연한 회색
  text5: '#FFFFFF',
  primary1: '#3366FF', // 기본 파란색
  box1: '#EEF1FB', // 연한 보라색
  box2: '#E5F3ED', // 연한 초록색
  box3: '#F8F2F8', // 연한 분홍색
  bgColor: '#f8f8f8',
  bgColor2: '#FFFFFF',
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  shadow: `
    -webkit-box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
    box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
  `,
  borderLine: `
    border: 1px solid #e1e2e3;
    border-radius: 5px;
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;
