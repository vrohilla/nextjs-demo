import { User } from "../components/profile";
import { Auth0Client } from "@auth0/nextjs-auth0/server"

export const auth0 = new Auth0Client();
export default async function Home() {  
  const session = await auth0.getSession()
  if (!session) {
    return (
      <main>
        <a href="/auth/login?screen_hint=signup">Sign up</a>
        <a href="/auth/login?returnTo=/auth0-login">Log in</a>
      </main>
    )
  }
  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
      <a href="/auth/logout">Log out</a>
     <User/>
    </main>
  )
}