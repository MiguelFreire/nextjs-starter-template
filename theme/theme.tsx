import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile: 0,
  tablet: 769,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
};

const breakPointsWithPixels = {
  sm: `${breakpoints.mobile}px`,
  md: `${breakpoints.tablet}px`,
  lg: `${breakpoints.desktop}px`,
  xl: `${breakpoints.widescreen}px`,
}

const containerWidth = {
  mobile: 640,
  desktop: 960,
  widescreen: 1152,
  fullhd: 1344,
};

const font = {
  family: 'Roboto, sans-serif',
};

export const gridTheme = {
  breakpoints: {
    xs: breakpoints.mobile,
    sm: breakpoints.mobile,
    md: breakpoints.tablet,
    lg: breakpoints.desktop,
    xl: breakpoints.widescreen,
  },
  container: {
    maxWidth: {
      xl: containerWidth.widescreen,
      lg: containerWidth.desktop,
      sm: 540,
      xs: 320,
    },
  }
};

export const ThemeConfig: DefaultTheme = {
  containerWidth,
  font,
  breakpoints: breakPointsWithPixels,
  colors: {
    orange: '#fe6446',
    green: '#28b77f',
    purple: '#241251',
  },
  gradients: {
    orange: 'linear-gradient(117deg, #fe9150, #fe6446)',
    green: 'linear-gradient(to top, #28b77f, #86cf77)',
    purple: 'linear-gradient(297deg, #241251, #4718c0)',
  },
};

export const isMobile = () => ( window ? window.innerWidth < breakpoints.tablet : false);

export const isDesktop = () => ( window ? window.innerWidth >= breakpoints.desktop : false);

export const isTablet = () => ( window ? window.innerWidth >= breakpoints.tablet : false);
