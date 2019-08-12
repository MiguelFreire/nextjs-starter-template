import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  body {
    font-family: ${props => (props.theme.font.family)};
  }

  a {
    text-decoration: none !important;
    color: inherit;
  }
`;

export default globalStyle;
