'use client'

import React from 'react';
import Spinner from "@/components/spinner/Spinner";
import {useSession} from "next-auth/react";
import PatientCard from "@/components/main/PatientCard";

const PatientPage = ({params}: {params: {patientID: number}}) => {
    const { data: session, status } = useSession();

    return <div className={"border-4 w-screen h-screen bg-teal-50"}> {status == "loading"?
        (<div className={`spinner-container active`}>
            <Spinner />
        </div>) :
        (<div className={"flex flex-col"}>
            <PatientCard id={params.patientID}/>
        </div>)}
    </div>;
};

export default PatientPage;