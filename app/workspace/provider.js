"use client";

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { useEffect, useState } from 'react';
import AppSidebar from './_components/AppSidebar';

function WorkspaceProvider({ children }) {
  const newUserMutation = useMutation(api.users.CreateNewUser);
  const { user, isLoaded } = useUser(); 
  const [userDetail, setUserDetail]=useState();

  const CreateNewUser = async () => {
    if (!user) return;

    const result = await newUserMutation({
      name: user.fullName || "",
      email: user.primaryEmailAddress?.emailAddress || "",
      picture: user.imageUrl || ""
    });

    console.log(result); 
    setUserDetail(result);
  };

  useEffect(() => {
    if (isLoaded && user) {
      CreateNewUser();
    }
  }, [isLoaded, user]);

  // return <>
  //  {children}</>; 
  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
       <SidebarProvider>
         <AppSidebar />
      <div className='w-full p-10'>
          <SidebarTrigger/>
             {children}</div>
      </SidebarProvider>
      </UserDetailContext.Provider>
  )
}

export default WorkspaceProvider;
