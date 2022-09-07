import '../styles/globals.css'
import '../styles/Home.module.css'
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Transition from './components/transition';
import Layout from './components/layout';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head'
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <Layout>
          <Transition>
            <NextNProgress options={{ easing: "ease", speed: 500 }} />
            <Component {...pageProps} />
          </Transition>
          {/* <script async type="module" src="app.js"></script> */}
        </Layout>
        <script async type="module" src="app.js"></script>
      </>
      )
}

      export default MyApp
