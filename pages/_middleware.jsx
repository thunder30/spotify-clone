import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

const secret = process.env.JWT_SECRET

export default async function middleware(req) {
    // Token will exist if user is logged in
    const token = await getToken({ req, secret })
    console.log('middleware log -> ', {
        secret,
        ['env.JWT_SECRET']: process.env.JWT_SECRET,
        token,
    })

    const { pathname } = req.nextUrl
    console.log(pathname)

    if (token && pathname === '/login') {
        return NextResponse.redirect('/')
    }

    // Allow the request if the following is true...
    // 1. Its a request for next-time session & provider fetching
    // 2. the token exists

    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next()
    }

    // Redirect them to login if they dont have token AND are requesting a protected route
    if (!token && pathname !== '/login') {
        return NextResponse.redirect('/login')
    }
}
