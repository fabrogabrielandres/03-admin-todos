import { auth } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <h1>hola mundo</h1>
      </div>
    </>
  );
}
