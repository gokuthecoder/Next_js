import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/Layout";


export default function FirstPost() {
    return (
        <>
            <Layout>
                <h1>First Post Madarchod Betichod</h1>
                Learn <Link href="/">Next.js!</Link>
                <Head>
                    <title>first page</title>
                </Head>
            </Layout>
        </>
    )
}