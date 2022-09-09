import Main from '../components/Main'
import Head from 'next/head'
import About from '../components/About'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Milk Equity</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
    </div>
  )
}
