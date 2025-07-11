import { MetaTagsType } from "@/types/alltype";

export async function getMetaTags(): Promise<MetaTagsType[]> {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/metatags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Accept-Language": "az", 
    },
    cache: 'no-store' 
  });

  if (!res.ok) {
    console.error("Fetch xətası, Status:", res.status);
    throw new Error('Hero məlumatları yüklənərkən xəta baş verdi');
  }

  const json = await res.json();
  return json.data; 
}