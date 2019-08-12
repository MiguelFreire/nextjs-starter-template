import App, { Container, AppContext } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeConfig, gridTheme } from '../theme/theme';
import GlobalStyle from '../styles/global';
import { Reset } from 'styled-reset'

export default class CustomApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={ThemeConfig}>
          <
          // @ts-ignore
          GridThemeProvider gridTheme={gridTheme}
          >
            <React.Fragment>
              {/* <Navbar /> */}
              <Component {...pageProps} />
              <Reset />
              <GlobalStyle />
            </React.Fragment>
          </GridThemeProvider>
        </ThemeProvider>
      </Container>
    );
  }
};
