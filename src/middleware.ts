import { NextRequest, NextResponse } from "next/server"


export const config={
    matcher: [
      "/((?!_next/static|_next/image|favicon.ico).*)", // Ignore static files
  ],
}
const allowedPath=["/","/signup","/login"]
export function middleware(request: NextRequest){
    if(!allowedPath.includes(request.nextUrl.pathname)){
      const token=request.cookies.get(process.env.NEXT_APP_TOKEN_NAME as string)
      if(!token){
        return NextResponse.redirect(new URL('/login',request.url))
      }
    }  
  return NextResponse.next();
}