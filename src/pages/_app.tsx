import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fake Bank Digital</title>
        <link rel="shortcut icon" href="/img/logo-fake-bank.png" />
        <link rel="apple-touch-icon" href="/img/logo-fake-bank.png" />
        <meta
          name="description"
          content="A simple project start to work with TypeScript, react, nextJS and Styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
