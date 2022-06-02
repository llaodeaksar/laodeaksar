import { globalStyles } from "design-system";
import type { AppProps } from 'next/app'
import '../styles/globals.css';
//import '../styles/font.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return <Component {...pageProps} />
}

export default MyApp
