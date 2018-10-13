import { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default class extends Component {
  constructor(){ 
    super()
    this.state = {
      currentHover: 'about',
      currentBgImg: '/static/candy.jpg',
      bgImgs: [
        '/static/bluecar.jpg',
        '/static/coffeeshop.jpg',
        '/static/candy.jpg',
        '/static/water.jpg'
      ]
    }
  }

  changeHover = currentHover => {
    switch(currentHover) {
      case 'about': 
        this.setState({
          currentBgImg: this.state.bgImgs[0]
        })
        break
      case 'products': 
        this.setState({
          currentBgImg: this.state.bgImgs[1]
        })
        break
      case 'collections':
        this.setState({
          currentBgImg: this.state.bgImgs[2]
        })
        break 
      case 'blog':
      this.setState({
        currentBgImg: this.state.bgImgs[3]
      })
      break
    }
  }

  render() {
    return <div>
      <Layout 
        title='chokeme|too'
        changeHover={this.changeHover}
      >
        <main><img src={this.state.currentBgImg}/></main>
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
        img {
          width: 400px;
          height: auto;
        }
      `}</style>
    </div>
  }
} 

