'use client';

import { useSession } from 'next-auth/react';
import { Error } from '@/components/error/error';

export default function HomePage() {
  const { data, status } = useSession();
  console.log(status);
  if (data) {
    return <div>Hello {data.user?.email}</div>;
  } else {
    return <Error error={'please login'} />;
  }
}
