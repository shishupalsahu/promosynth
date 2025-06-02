"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useState } from 'react'

function CreateAd() { 
    const [userInput, setUserInput]=useState();
  return (
    <div className='mt-32 flex flex-col items-center justify-center '> 
     <div>
      <Image src='/advertigement.png' alt='icon' width={150} height={150} />

     </div>
        <h2 className=' font-bold text-2xl text-center'> Create AI Video Ads in Just One Click.! </h2>
        <p>Turn your ideas into stunning ,scroll-stopping Video- Instantly, effortlessly , and without editing skills.!</p>

       <Input placeholder ='Enter the topic or product info' 
       className={'w-lg text-lg mt-5'} 
       onChange={(e)=>setUserInput(e.target.value)}
       />     
      <Button className={'mt-5 w-md'}> <sparkles/>Generate</Button>
    </div>
  )
}

export default CreateAd
