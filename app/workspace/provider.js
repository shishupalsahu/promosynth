"use client";

import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { useEffect, useState } from 'react';

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
      <div>{children}</div>
      </UserDetailContext.Provider>
  )
}

export default WorkspaceProvider;
