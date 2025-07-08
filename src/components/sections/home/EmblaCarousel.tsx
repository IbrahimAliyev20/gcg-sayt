// 'use client';

// import React from 'react';

// const LogoCarusel = () => {
//   const logos = [
//     { id: 1, text: 'logoipsum', variant: 'light' },
//     { id: 2, text: 'logoipsum', variant: 'dark' },
//     { id: 3, text: 'logoipsum', variant: 'dark' },
//     { id: 4, text: 'logoipsum', variant: 'dark' },
//     { id: 5, text: 'logoipsum', variant: 'dark' },
//     { id: 6, text: 'logoipsum', variant: 'light' },
//     { id: 7, text: 'logoipsum', variant: 'light' },
//     { id: 8, text: 'logoipsum', variant: 'dark' },
//     { id: 9, text: 'logoipsum', variant: 'dark' },
//     { id: 10, text: 'logoipsum', variant: 'dark' },
//   ];

//   const duplicatedLogos = [...logos, ...logos];

//   return (
//     <div className="w-full   py-8 md:py-9 overflow-hidden">
//       <div className="relative">
//         <div className="flex animate-scroll whitespace-nowrap">
//           {duplicatedLogos.map((logo, index) => (
//             <div
//               key={`${logo.id}-${index}`}
//               className="flex-shrink-0 mx-8 lg:mx-12"
//             >
//               <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
//                 <div className={`w-8 h-8 rounded-md flex items-center justify-center ${
//                   logo.variant === 'dark' 
//                     ? 'bg-gray-800' 
//                     : 'bg-gray-200'
//                 }`}>
//                   <div className={`w-4 h-4 rounded-sm ${
//                     logo.variant === 'dark' 
//                       ? 'bg-white' 
//                       : 'bg-gray-600'
//                   }`}></div>
//                 </div>
                
//                 <span className={`text-lg font-medium ${
//                   logo.variant === 'dark' 
//                     ? 'text-gray-800' 
//                     : 'text-gray-600'
//                 }`}>
//                   {logo.text}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="absolute left-0 top-0 bottom-0 w-22 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
//         <div className="absolute right-0 top-0 bottom-0 w-22 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
//       </div>
      
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
        
//         .animate-scroll {
//           animation: scroll 10s linear infinite;
//         }
        
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LogoCarusel;