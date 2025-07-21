import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const cookieToken = request.cookies.get("nextjs")
    console.log(cookieToken.value);
    const dummyData = {
        role : "admin"
    }
    const isServicePage = request.nextUrl.pathname.startsWith("/services")
    const isAdmin = dummyData.role == "admin"

    if(isServicePage && !isAdmin){
        return NextResponse.redirect(new URL("/login", request.url))
    }

  return NextResponse.next()
}
