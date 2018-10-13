import Head from 'next/head'
import Navigation from './Navigation'

const Layout = props => <>
  <Head>
    <title>{props.title}</title>
  </Head>
  <Navigation changeHover={props.changeHover} />
  {props.children}
</>

export default Layout