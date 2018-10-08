import Document, { Head, Main, NextScript } from 'next/document'

export default class ChokeMeToo extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return <html>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="icon" href="static/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  }
}
