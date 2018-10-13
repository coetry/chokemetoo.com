function Navigation (props) {
  return <nav>
    <a>about</a>
    <a>products</a>
    <a>collections</a>
    <a>blog</a>
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
export default Navigation