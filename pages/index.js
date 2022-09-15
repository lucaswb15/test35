import Main from '../components/Main'
import Head from 'next/head'
import About2 from '../components/About2'
import About3 from '../components/About3'
import About4 from '../components/About4'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Milk Equity</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About4/>
      <About2/>
    </div>
  )
}
