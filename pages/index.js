import { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default class extends Component {
  constructor(){ 
    super()
    this.state = {
      currentHover: 'about'
    }
  }

  changeHover = currentHover => {
    this.setState({ currentHover }, () => {
      console.log(this.state)
    })
  }

  render() {
    return <div>
      <Layout 
        title='chokeme|too'
        changeHover={this.changeHover}
      >
        <main>{this.state.currentHover}</main>
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
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
        }
      `}</style>
    </div>
  }
} 

