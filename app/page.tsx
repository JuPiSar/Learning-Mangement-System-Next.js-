"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";



export default function Home() {
          const { 
        data: session,  //refetch the session
    } = authClient.useSession() 

  const router = useRouter();


    async function signOut() {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/"); // redirect to login page
            toast.success("Signout successfully")
          },
        },
      });
    }

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">Hello World</h1>
      <ThemeToggle></ThemeToggle>

      {session ? (
        <div>
          <p>{session.user.name}</p>
          <Button onClick={signOut}>Logout</Button>
        </div>
      ): <Button onClick={() => router.push('/login')}>Login</Button>}
    </div>
  );
}
