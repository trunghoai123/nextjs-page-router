import Head from 'next/head';
import Layout from '../components/layout';
export async function getStaticProps() {
  // getStaticProps - fetch data on any request
  async function getServerSideProps(context) {
    return {
      props: {},
    };
  }
  // static props - fetch data at build time
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title></title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
