export  interface HeroType {
    name: string;
    title: string;
    image: string;
    thumb_image: string;
}
export  interface StatiscType {
    title: string;
    number: string;
}
export interface AboutType {
    title: string;
    description: string;
    image: string;
    thumb_image: string;
}
export interface AdvantagesType {
    title: string;
    description: string;
    image: string;
    thumb_image: string;
}
export interface OurValueType {
    title: string;
    description: string;

}
export interface OurTeamType {
    title: string;
    description: string;
}


export interface ServiceItemType {
  title: string;
  description: string; 
  image: string;
  thumb_image: string;
}

export interface PaginationLinksType {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface MetaLinkType {
  url: string | null;
  label: string;
  active: boolean;
}

export interface MetaType {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLinkType[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface ServiceApiResponseType {
  data: ServiceItemType[];
  links: PaginationLinksType;
  meta: MetaType;
}
export interface ContactType {
  email: string;
  phone: string;
  address: string;
  map: string;
}