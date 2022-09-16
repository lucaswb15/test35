import Main from '../components/Main'
import Head from 'next/head'
import About3 from '../components/About3'
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
      <About3/>
    </div>
  )
}
