'use client';

import {useSession} from 'next-auth/react';
import PatientTable from "@/components/main/PatientTable";
import Spinner from '@/components/spinner/Spinner';

export default function HomePage() {
  const { data: session, status } = useSession();


    return <div className={"border-4 w-screen h-screen bg-teal-50"}> {status == "loading"?
        (<div className={`spinner-container active`}>
          <Spinner />
        </div>) :
        (<div className={"flex flex-col h-[100%]"}>
          <div>
            <button className={"m-2 p-2 w-60 border rounded-lg bg-teal-300 hover:bg-teal-400"}>Новый приём</button>
            <button className={"m-2 p-2 w-60 border rounded-lg bg-teal-300 hover:bg-teal-400"}>Новый пациент</button>
          </div>
          <div className={'mt-10 flex justify-center w-[85vw]'}>
            <PatientTable/>
          </div>
        </div>)}
    </div>;
}
