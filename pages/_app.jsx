import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { RecoilBridge, RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    // console.log(`session _app - `, session)
    return (
        <SessionProvider session={session}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </SessionProvider>
    )
}

export default MyApp
