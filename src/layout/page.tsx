// import React from 'react';
// import { LayoutGrid, Film, Music, Image as ImageIcon, Scissors, DollarSign, Megaphone, Star, LogOut } from 'lucide-react';
// import TopNav from '../component/ui/topnav';
// import Sidebar from '../component/ui/sidebar';
// import { COLORS } from '../constants/colors';

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
  

//     <div
//       style={{
//         display: "flex",
//         height: "100vh",
//         background: COLORS.background.main,
//         color: COLORS.text.secondary,
//         fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
//         overflow: "hidden",
//       }}
//     >
//       <Sidebar activeItem="Movie Details" />
//       <div style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto" }}>
//         <TopNav activeTab="Movies" />

//         <main>{children}</main>
//       </div>
//     </div>
//   );
// }