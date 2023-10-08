'use client';

import {signOut, useSession} from 'next-auth/react';

export default function HomePage() {
  const { data: session, status } = useSession();
  console.log(session);

    return <div className={"border-4 w-screen h-screen bg-teal-50"}> {status == "loading"?
        (<div>Loading...</div>) :
        (<div>
          <p className={"m-2 p-2"}>
            Hello {session?.user?.email}
          </p>
          <button onClick={() => signOut()} className={"border border-black rounded-lg p-2 m-2 bg-neutral-300 hover:bg-neutral-400"}>
            Выход
          </button>
        </div>)}
    </div>;
}
