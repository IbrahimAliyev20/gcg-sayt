import { SocialMediaType } from "@/types/alltype";

export async function getSocialMedia(): Promise<SocialMediaType[]> {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/social-media`, {
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