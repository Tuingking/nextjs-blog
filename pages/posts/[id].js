import Head from 'next/head'

import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    // fallback: false | true | blocking
    // false -> any path not returned by `getStaticPaths` will result in 404 Page
    // more: https://nextjs.org/docs/basic-features/data-fetching/overview#the-fallback-key-required
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}