
import { ServiceApiResponseType } from '@/types/alltype';

export async function getOurServices(): Promise<ServiceApiResponseType> {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/our-service`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'az',
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Xidmətlər haqqında məlumat yüklənərkən xəta baş verdi');
  }

  const json = await res.json();
  return json; 
}