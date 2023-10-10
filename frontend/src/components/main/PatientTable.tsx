
import axios from "axios";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import jwtDecode from 'jwt-decode';

interface Patient {
  id: number;
  attributes: {
    name: string;
    lastName: string;
    patronymic: string;
    date_birth: string;
    phoneNumber: string;
  };
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

  const patientsList = data?.map((item) => (
    <tr key={item.id}>
      <td>{item.attributes.name}</td>
      <td>{item.attributes.lastName}</td>
      <td>{item.attributes.patronymic}</td>
      <td>{item.attributes.date_birth}</td>
      <td>{item.attributes.phoneNumber}</td>
    </tr>
  ));
  console.log(patientsList);
  return (
    <div className="m-5 p-1">
      <table className="table-auto">
        <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Last Name</th>
          <th className="px-4 py-2">Patronymic</th>
          <th className="px-4 py-2">Date of Birth</th>
          <th className="px-4 py-2">Phone Number</th>
        </tr>
        </thead>
        <tbody>{patientsList}</tbody>
      </table>
    </div>
  )
}
