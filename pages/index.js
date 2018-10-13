import Head from 'next/head'
import Layout from '../components/Layout'

export default () => <div>
  <Layout title='chokeme|too'>
    <main>chokemetoo.com</main>
  </Layout>
  <style jsx global>{`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: monospace;
    }
  `}</style>
  <style jsx>{`
    main {
      width: 800px;
      height: 100vh;
      margin: auto;
      background-color: pink;
    }
  `}</style>
</div>

