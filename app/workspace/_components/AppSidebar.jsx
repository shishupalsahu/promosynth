"use client"

import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Settings2Icon, Video, Videotape, WalletCards } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'
const MenuOptions = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/workspace'
  },
  {
    title: 'Create Ad',
    icon: Video,
    path: '/workspace/creat-ad'
  },
  {
    title: 'My Videos',
    icon: Videotape,
    path: '/workspace/my-videos'
  },
  {
    title: 'Setting',
    icon: Settings2Icon,
    path: '/workspace/settings'
  },
  {
    title: 'Billing',
    icon: WalletCards,
    path: '/workspace/billing'
  }
]

function AppSidebar() { 
  const path=usePathname(); 
  console.log(path);
  
  return (
    <Sidebar>
      <SidebarHeader className={'flex items-center my-4'} >
        <Image src={'/logo.svg'} alt='logo' width={150} height={150} />
      </SidebarHeader>
      <hr />
      <SidebarContent>
        <SidebarGroup >
          <Button className={'mt-3'}> + Create New Ad Video</Button>
        </SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>

            {/* {MenuOptions.map((menu,index)=>( 
                    <SidebarMenuItem key={menu.index}>
                    <SidebarMenuButton asChild className={'p-5'}>
                         <a href={menu.title} 
                           className={`text-[17px]`}
                         > 
                             <menu.icon className='h-10 w-10'/>
                             <span>{menu.title}</span>
                        </a>
                    </SidebarMenuButton>
                       </SidebarMenuItem>
                  ))} */}
            {MenuOptions.map((menu) => (
              <SidebarMenuItem key={menu.title}>
                <SidebarMenuButton asChild className={'p-5'}>
                  <a href={menu.path} className={`text-[17px] ${path==menu.path&&'text-primary bg-blue-100'} ` }>
                    <menu.icon className='h-10 w-10' />
                    <span>{menu.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}


          </SidebarMenu>
        </SidebarGroupContent>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
