import Head from 'next/head'
import Navigation from './Navigation'

const Layout = props => <>
  <Head>
    <title>{props.title}</title>
  </Head>
  <Navigation changeHover={props.changeHover} />
  <main>
    <img src={props.currentBgImg}/>
    {props.children}
  </main>
  
  <style jsx>{`
    main {
      width: 800px;
      height: 100vh;
      margin: auto;
      background-color: pink;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
    }
    img {
      width: 400px;
      height: auto;
    }
  `}</style>

</>

export default Layout