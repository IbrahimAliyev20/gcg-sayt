// import React from 'react';
// import { NewsCard } from '../shared/news-card';
// import { Link } from '@/i18n/navigation';

// export function NewsSection() {
//   const newsItems = [
//     {
//       imageSrc: "/images/herosec.jpg",
//       readingTime: '9 dq oxuma müddəti',
//       date: '30.06.2025',
//       title: 'Helikopterin yenidən aktivləşdirilməsi',
//       description: 'Embark on a journey to discover the allure and beauty of high altitude...',
//     },
//     {
//       imageSrc: "/images/herosec.jpg",
//       readingTime: '9 dq oxuma müddəti',
//       date: '30.06.2025',
//       title: 'Dənizdə istehsalat gəmisi',
//       description: 'Embark on a journey to discover the allure and beauty of high altitude...',
//     },
//     {
//       imageSrc: "/images/herosec.jpg",
//       readingTime: '9 dq oxuma müddəti',
//       date: '30.06.2025',
//       title: 'Xidmət Əməliyyat Gəmisi (CSOV/so...',
//       description: 'Embark on a journey to discover the allure and beauty of high altitude...',
//     },
//     {
//       imageSrc: "/images/herosec.jpg",
//       readingTime: '9 dq oxuma müddəti',
//       date: '30.06.2025',
//       title: 'Xidmət Əməliyyat Gəmisi (CSOV/So...',
//       description: 'Embark on a journey to discover the allure and beauty of high altitude...',
//     },
//   ];

//   return (
//     <section className="container mx-auto py-8 md:py-18 px-4">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//         <h2 className="text-[22px] sm:text-[32px] font-medium mb-4 sm:mb-0">Xəbər və yeniliklər</h2>
//         <Link href="#" className="hidden sm:flex text-[#3674B5] items-center gap-1">
//           Daha çoxuna bax
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {newsItems.map((item, index) => (
//           <NewsCard key={index} {...item} />
//         ))}
//       </div>
      
//       <div className="flex justify-end mt-8 sm:hidden">
//         <Link href="#" className="text-[#3674B5] flex items-center gap-1">
//           Daha çoxuna bax
//         </Link>
//       </div>
//     </section>
//   );
// }