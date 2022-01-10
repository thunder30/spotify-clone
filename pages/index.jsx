import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'

export default function Home() {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <main className="flex">
                <Sidebar />
                <Center />
            </main>

            <div>{/* Player */}</div>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context),
        },
    }
}
