
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
                <meta name="description" content="Full stack Software Engineer skilled in both front-end and back-end technologies. Proficient in creating responsive web applications with a strong focus on user experience. Experienced in working with modern frameworks and technologies to deliver high-quality solutions." />
                <meta property="og:image" content="/logo.png" />
                <meta name="keywords" content="Next.js, React, Syed Faisal Imam, Full Stack Software Engineer" />
                <meta property="og:title" content="Syed Faisal Imam | Full Stack Software Engineer" />
                <meta property="og:description" content="Full stack Software Engineer skilled in both front-end and back-end technologies. Proficient in creating responsive web applications with a strong focus on user experience. Experienced in working with modern frameworks and technologies to deliver high-quality solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://syed-faisal-imam.vercel.app/" />
                <meta property="og:site_name" content="Syed Faisal Imam | Full Stack Software Engineer" />
                <meta name="twitter:title" content="Syed Faisal Imam | Full Stack Software Engineer" />
                <meta name="twitter:description" content="Full stack Software Engineer skilled in both front-end and back-end technologies. Proficient in creating responsive web applications with a strong focus on user experience. Experienced in working with modern frameworks and technologies to deliver high-quality solutions." />
                <meta name="twitter:image" content="logo.png" />
                <link rel="icon" href="/logo.png" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="manifest" href="/public/manifest.json" />
                <link rel="canonical" href="https://syed-faisal-imam.vercel.app" />

            </Head>

            <main className={inter.className}>
                <MainBody />
            </main></>
    )
}

export default Home;