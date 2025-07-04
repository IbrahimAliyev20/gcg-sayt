import React from 'react';
import { BrainCircuit, FileText, Combine, Wind } from 'lucide-react';

export interface Service {
  icon: React.ReactNode; 
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    icon: <BrainCircuit size={28} />,
    title: "İntellektual idarəetmə sistemləri",
    description: "Gəmilərin hərəkətinin real vaxt rejimində monitorinqi və nəzarəti üçün proqram təminatı."
  },
  {
    icon: <FileText size={28} />,
    title: "Layihə üzrə konsaltinq",
    description: "Analitikadan istismara verilməsinə qədər ekoloji standartlara cavab verən obyektlərin dizaynı."
  },
  {
    icon: <Combine size={28} />,
    title: "Konsultasiya və dizayn",
    description: "Xəzər Dənizi liman operatorları, Xəzər xidmət gəmiləri və yaxtalar üçün gövdə və sistemlər."
  },
  {
    icon: <Wind size={28} />,
    title: "WindWings® inteqrasiya",
    description: "Mövcud və ya yeni gəmilərin modernləşdirilməsi, külək-qanadları sistemlərinin quraşdırılması."
  },
];