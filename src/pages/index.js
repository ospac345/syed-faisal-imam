
import Body from "@/components/body/Body";
import '../styles/styles.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


const Home = () => {
    return (
        <main className={inter.className}>
            <Body />
        </main>
    )
}

export default Home;