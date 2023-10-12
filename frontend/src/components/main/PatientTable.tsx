
import axios from "axios";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import { useRouter } from "next/navigation";

interface Patient {
  data: IPatientData[] | null;
}

interface IPatientData {
  id: number;
  attributes: {
    name: string;
    lastName: string;
    patronymic: string;
    gender: string
    date_birth: string;
    phoneNumber: string | null;
    address: string | null;
    snils: string;
  };
}

export default function PatientTable() {
  const {data: session} = useSession();
  const router = useRouter();
  const [data, setData] = useState<Patient | null>(null);

  useEffect(() => {
      axios.get("http://elertk133.fvds.ru:1337/api/patients", {
        headers: {Authorization: "Bearer " + session?.accessToken},
      })
        .then(res => setData(res.data.data))
        .catch(err => {console.error(err);});
    console.log(data);
  }, []);

  const patientsList = data?.data?.map((item) => (
    <tr key={item.id}>
      <td className={"p-2 border border-slate-300"}>{item.attributes.name}</td>
      <td className={"p-2 border border-slate-300"}>{item.attributes.lastName}</td>
      <td className={"p-2 border border-slate-300"}>{item.attributes.patronymic}</td>
      <td className={"p-2 border border-slate-300"}>{item.attributes.gender}</td>
      <td className={"p-2 border border-slate-300"}>{item.attributes.date_birth}</td>
      <td className={"p-2 border border-slate-300"}>{item.attributes.phoneNumber}</td>
      <td className={"p-2 border border-slate-300"}>{item.attributes.address}</td>
      <td className={"p-2 border border-slate-300"}>{item.attributes.snils}</td>
      <td ><button className={"p-2 border rounded-lg"}>
          Окно пациента
      </button></td>
    </tr>
  ));
  console.log(data);
  return (
    <div className="m-5 p-1 w-auto">
      <table className="table w-auto">
        <thead>
        <tr>
          <th className="px-4 py-2 border border-slate-300 ">Имя</th>
          <th className="px-4 py-2 border border-slate-300">Фамилия</th>
          <th className="px-4 py-2 border border-slate-300">Отчество</th>
          <th className="px-4 py-2 border border-slate-300">Пол</th>
          <th className="px-4 py-2 border border-slate-300">Дата рождения</th>
          <th className="px-4 py-2 border border-slate-300">Номер телефона</th>
          <th className="px-4 py-2 border border-slate-300">Адрес</th>
          <th className="px-4 py-2 border border-slate-300">Снилс</th>
        </tr>
        </thead>
        <tbody>{patientsList}</tbody>
      </table>
    </div>
  )
}


