const calcRem = (size) => `${size / 16}rem`;

const colors = {
  context: '#6c6c6c',
  main: '#3697ff',
  sub1: '#a28440',
  sub2: '#ffefcc',
};

const typos = {
  xl: `bold ${calcRem(72)} Noto Sans KR`,
  l: `bold ${calcRem(36)} Noto Sans KR`,
  xm: `500 ${calcRem(24)} Noto Sans KR`,
  m: `400 ${calcRem(24)} Noto Sans KR`,
  xs: `bold ${calcRem(21)} Noto Sans KR`,
  s: `400 ${calcRem(18)} Noto Sans KR`,
  ss: `400 ${calcRem(14)} Noto Sans KR`,
};

const theme = {
  colors,
  typos,
};

export default theme;
