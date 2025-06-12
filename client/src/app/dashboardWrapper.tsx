"use client";
import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StoreProvider, { useAppSelector } from './redux';

// if it is larger than medium screens pl-64

const DashboardLayout = ({children}:{children:React.ReactNode}) => {

  const isSidebarCollapsed=useAppSelector((state)=>state.global.isSidebarCollapsed);

  const isDarkMode=useAppSelector((state)=>state.global.isDarkMode);

// it will add class dark to the root of the element layout.tsx
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  })

  useEffect(() => {
  console.log("Dark mode active:", isDarkMode);
}, [isDarkMode]);

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        <Sidebar/>
        {/* when sidebar is collapsed pl going to be 0 */}
        <main className={`flex w-full flex-col bg-gray-50 dark:bg-[#101214] 
        ${isSidebarCollapsed?"": "md:pl-64"}
        `}>
        <Navbar/>
        {children}
        </main>
    </div>
  )
};

const DashboardWrapper=({children}:{children:React.ReactNode})=>{
  return(
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
}



export default DashboardWrapper