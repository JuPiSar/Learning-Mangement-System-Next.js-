import { createAuthClient } from "better-auth/react"
/**You can only use auth client in client component */
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000"
})