import Head from 'next/head';
import { globalStyles, ThemeProvider } from "design-system";
import type { AppProps } from 'next/app'
import '../styles/global.css';
import '../styles/font.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return (
    <ThemeProvider>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="google-site-verification"
          content="f11boUvGIzjbYwQVuaCieN-J4vcA_BxJuO_S54WPf-U"
        />
      </Head>
      {/* <DefaultSeo />*/}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
