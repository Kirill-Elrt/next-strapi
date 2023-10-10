
import axios from "axios";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import jwtDecode from 'jwt-decode';

interface Patient {
  id: number;
  attributes: Record<string, any>;
}

export default function PatientTable() {
  const {data: session} = useSession();

  const [data, setData] = useState<Patient[] | null>(null);

  useEffect(() => {
    if(session?.accessToken) {
      axios.get<Patient[]>("http://elertk133.fvds.ru:1337/api/patients", {
        headers: {Authorization: "Bearer " + session.accessToken},
      })
        .then(res => setData(res.data))
        .catch(err => {console.error(err);});
    }
    const decoded = jwtDecode(session?.accessToken);
    console.log("decoded jwt: " + JSON.stringify(decoded));
    console.log(data);
  }, []);

  const patientsList = data?.data.map((item) => (
    <li key={item.id} className="m-4">
      {JSON.stringify(item.attributes)}
    </li>
  ));

  return (
    <div className="m-5 p-1">
      <ul className={'text-red-500'}>{patientsList}</ul>
    </div>
  )
}
