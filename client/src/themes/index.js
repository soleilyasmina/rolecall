import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Montserrat',
    },
    icons: {
      size: {
        small: '20px',
        medium: '24px',
        large: '48px',
        xlarge: '96px',
      },
      extend: undefined,
      margin: {
        small: '10px',
        medium: '20px',
        large: '36px',
        xlarge: '84px',
      },
    },
  },
};

const ThemeProvider = ({ children }) => (
  <Grommet theme={theme}>{children}</Grommet>
);

export default ThemeProvider;
