'use client';

import {useSession} from 'next-auth/react';
import PatientTable from "@/components/main/PatientTable";

export default function HomePage() {
  const { data: session, status } = useSession();
  console.log(session);


    return <div className={"border-4 w-screen h-screen bg-teal-50"}> {status == "loading"?
        (<div>Loading...</div>) :
        (<div className={"grid grid-cols-2"}>
          <div>
            <button className={"m-2 p-2 w-60 border rounded-lg bg-teal-300 hover:bg-teal-400"}>Новый приём</button>
            <button className={"m-2 p-2 w-60 border rounded-lg bg-teal-300 hover:bg-teal-400"}>Новый пациент</button>
          </div>
          <div>Фильтры</div>
          <div>
            <PatientTable/>
          </div>
        </div>)}
    </div>;
}
