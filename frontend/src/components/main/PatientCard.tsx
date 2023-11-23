import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSession} from "next-auth/react";
import {json} from "stream/consumers";

const PatientCard = ({id}: {id: number}) => {

    const {data: session} = useSession();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        const getPatientData = async () => {
            const {data} = await axios.get(`http://elertk133.fvds.ru:1337/api/patients/${id}`, {
                headers: {Authorization: "Bearer " + session?.accessToken},
            })
            setData(data.data);
            setLoading(false);
        }
        getPatientData()
    }, []);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default PatientCard;