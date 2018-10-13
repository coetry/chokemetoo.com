function Navigation (props) {

 return <nav>
    <a onMouseEnter={() => props.changeHover('about')}>about</a>
    <a onMouseEnter={() => props.changeHover('products')}>products</a>
    <a onMouseEnter={() => props.changeHover('collections')}>collections</a>
    <a onMouseEnter={() => props.changeHover('blog')}>blog</a>
    <style jsx>{`
      nav {
        display: flex;
        flex-direction: column;
        font-size: 60px;
        position: fixed;
        bottom: 0;
        left: 0;
      }
      a:hover {
        letter-spacing: 30px;
      }
    `}</style>
  </nav>
}

function logHover (e) {
  console.log('HOVER: ', e)
}

export default Navigation