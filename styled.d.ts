import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    gradients: any;
    breakpoints: any;
    containerWidth : any;
    colors: any;
    font: {
      family: string;
    }
  }
}


export interface ThemeProps {
  gridTheme?: GridTheme;
  children: React.ReactNode;
}

