
import MainBody from "@/components/body/MainBody";
import { Inter } from 'next/font/google'
import Head from 'next/head'
import '../app/globals.css'


const inter = Inter({ subsets: ['latin'] })


const Home = () => {
    return (
        <>
            <Head>
                <title>Syed Faisal Imam</title>
                <meta name="description" content="Welcome to my portfolio!" />
                <meta property="og:image" content="/logo.png" />
                <meta name="keywords" content="Next.js, React, Syed Faisal Imam, Full Stack Developer" />
                <meta property="og:title" content="Syed Faisal Imam | Full Stack Developer" />
                <meta property="og:description" content="Welcome to my portfolio!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://syedfaisalimam.com/" />
                <meta property="og:site_name" content="Syed Faisal Imam | Full Stack Developer" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Syed Faisal Imam | Full Stack Developer" />
                <meta name="twitter:description" content="Welcome to my portfolio!" />
                <meta name="twitter:image" content="logo.png" />
                <meta name="twitter:site" content="@syedfaisalimam" />
                <meta name="twitter:creator" content="@syedfaisalimam" />
                <link rel="icon" href="/logo.png" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="manifest" href="/public/manifest.json" />
                <link rel="canonical" href="https://syedfaisalimam.com/" />

            </Head>

            <main className={inter.className}>
                <MainBody />
            </main></>
    )
}

export default Home;