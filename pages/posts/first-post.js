import Link from "next/link";
import Head from 'next/head';


export default function FirstPost() {
    return (
        <>
            <h1>First Post Madarchod Betichod</h1>
            Learn <Link href="your-blog.com/posts/first-post">Next.js!</Link>
            <Head>
                <title>first page</title>
            </Head>
        </>
    )
}