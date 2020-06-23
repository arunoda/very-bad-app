import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello Title</title>
        <meta name='description' content="The description" />
      </Head>
      <div className="heading">
        <span className="hello">Hello</span>
        {` `}
        <span className="world">World</span>
      </div>
      <div className="loading">
        Wait for 3 minutes...
      </div>
      <style jsx>{`
        .heading {
          text-align: right;
          font-size: 100px;
          margin: 40px 100px 0 0;
        }

        .hello {
          color: red;
        }

        .world {
          color: green;
        }

        .loading {
          text-align: center;
          font-size: 30px;
        }
      `}</style>
    </div>
  )
}