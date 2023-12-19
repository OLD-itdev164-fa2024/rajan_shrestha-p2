import styled from 'styled-components';
import { space, breakpoints } from 'styled-system';
import theme from '../styles/theme';
const breakpoints = ['576px', '768px', '992px', '1200px'];

const space = [0, 4, 8, 16, 32, 64, 128, 256];

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];

const colors = {
  primary: '#3498db',
  text: '#333',
  // Define more colors as needed
};

const theme = {
  breakpoints,
  space,
  fontSizes,
  colors,
  // Add more theme properties as needed
};

export default theme;
