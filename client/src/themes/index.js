import { Grommet } from "grommet";

const theme = {
  global: {
    font: {
      family: "Montserrat"
    }
  }
};

const ThemeProvider = ({ children }) => (
  <Grommet theme={theme}>{children}</Grommet>
);

export default ThemeProvider;
