import { auth } from "@/app/api/auth/[...nextauth]/route";


export default async function ProfilePage() {
  const session = await auth()

  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
    </div>
  );
}