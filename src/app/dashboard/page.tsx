import { WidGetItem } from "@/components";
import { auth } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";




export default async function Home() {

  const session = await auth();

  if (!session?.user) {
    console.log("no estoy log");

    redirect("/api/auth/signin")
  }


  return (
    <>
      <WidGetItem title="hola">

      </WidGetItem>
    </>
  )
}