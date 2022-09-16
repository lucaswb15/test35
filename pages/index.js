import Main from '../components/Main'
import Head from 'next/head'
import About2 from '../components/About2'

import About_live from '../components/About_live'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Milk Equity</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About_live/>
      <About2/>
    </div>
  )
}
