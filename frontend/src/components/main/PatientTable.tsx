
import Link from "next/link";
import PatternTable from "@/components/main/PatternTable";

interface IPatientData {
  id: number;
  //Вынести параметры из attributes на уровень выше чтобы не писать каждый раз render: (attributes) => `${attributes.параметр}`
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
    const selectedColumns= [
        'name',
        'lastName',
        'patronymic'
    ];
  const columns = [
      {
          title: 'Имя',
          dataIndex: 'attributes',
          key: 'name',
          sorter: (a, b) => a.attributes.name.localeCompare(b.attributes.name),
          render: (attributes) => `${attributes.name}`,
          width: 200,
      },
      {
          title: 'Фамилия',
          dataIndex: 'attributes',
          key: 'lastName',
          sorter: (a, b) => a.attributes.lastName.localeCompare(b.attributes.lastName),
          render: (attributes) => `${attributes.lastName}`,
          width: 200,
      },
      {
          title: 'Отчество',
          dataIndex: 'attributes',
          key: 'patronymic',
          sorter: (a, b) => a.attributes.patronymic.localeCompare(b.attributes.patronymic),
          render: (attributes) => `${attributes.patronymic}`,
          width: 200,
      },
      {
          title: 'Пол',
          dataIndex: 'attributes',
          key: 'gender',
          sorter: (a, b) => a.attributes.gender.localeCompare(b.attributes.gender),
          render: (attributes) => `${attributes.gender}`,
          filters: [
              { text: 'Мужской', value: 'male' },
              { text: 'Женский', value: 'female' },
          ],
          onFilter: (value: string, record) => record.name.indexOf(value) === 0,
          width: 100,
      },
      {
          title: 'Телефон',
          dataIndex: 'attributes',
          key: 'phoneNumber',
          sorter: (a, b) => a.attributes.phoneNumber.localeCompare(b.attributes.phoneNumber),
          render: (attributes) => `${attributes.phoneNumber}`,
          width: 120,
      },
      {
          title: 'Адрес',
          dataIndex: 'attributes',
          key: 'address',
          sorter: (a, b) => a.attributes.address.localeCompare(b.attributes.address),
          render: (attributes) => `${attributes.address}`,
          width: 400,
      },
      {
          title: 'Дата рождения',
          dataIndex: 'attributes',
          key: 'date_birth',
          sorter: (a, b) => a.attributes.date_birth.localeCompare(b.attributes.date_birth),
          render: (attributes) => `${attributes.date_birth}`,
          width: 100,
      },
      {
          title: 'Снилс',
          dataIndex: 'attributes',
          key: 'snils',
          sorter: (a, b) => a.attributes.snils.localeCompare(b.attributes.snils),
          render: (attributes) => `${attributes.snils}`,
          width: 130,
      },
      {
          title: '',
          dataIndex: 'id',
          key: 'action',
          render: (id) => <Link href={`/`+ id}>Карточка</Link>,
          width: 100,
          fixed: 'right',
      },

  ]

    const availableColumns = [

        {
            title: 'Имя',
            value: 'name',
            disabled: true,
        },
        {
            title: 'Фамилия',
            value: 'lastName',
            disabled: true,
        },
        {
            title: 'Отчество',
            value: 'patronymic',
            disabled: true,
        },
        {
            title: 'Пол',
            value: 'gender',
        },
        {
            title: 'Телефон',
            value: 'phoneNumber',
        },
        {
            title: 'Адрес',
            value: 'address',
        },
        {
            title: 'Дата рождения',
            value: 'date_birth',
        },
        {
            title: 'Снилс',
            value: 'snils',
        },

    ]

    return <PatternTable<IPatientData> columns={columns} availableColumns={availableColumns} url={`http://elertk133.fvds.ru:1337/api/patients/`} selectedColumnsParam={selectedColumns}/>
}


