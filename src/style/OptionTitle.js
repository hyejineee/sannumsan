import styled from '@emotion/styled';

const OptionTitle = styled.label(({ theme, image }) => ({
  'font': theme.typos.xm,
  'color': theme.colors.main,
  'display': 'table-cell',
  'verticalAlign': 'bottom',
  'width': '17.3rem',
  'height': '23rem',
  'paddingBottom': '1.5rem',
  'backgroundImage': `url(${image})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': '90% auto',
  'backgroundPosition': 'center 30px',
  'cursor': 'pointer',
  'margin': '0 auto',
  ' :hover': {
    borderRadius: '20px',
    boxShadow: '0 3px 37px -10px rgba(207, 207, 207, 0.51)',
    transform: 'scale(1.2)',
  },
}));
export default OptionTitle;
