"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
 const isUserLoggedIn = true;

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 justify-center items-center'>
        <Image 
          src='/assets/images/logob.svg'
          alt='Notable logo'
          width={50}
          height={50}
          className=' object-contain'
        />
        <p className='logo_text'>Notable</p>
      </Link>

      {/*Desktop navigation appearance*/}
      <div className='sm:flex hidden'>
          {isUserLoggedIn ? (
            <div className='flex gap-3 sm:gap-5'>
              <Link href='/create-notable' className='black_btn'>
                Create Post
              </Link>
              <button type='button' onClick={signOut}
              className='outline_btn'>
                signOut
              </button>

              <Link href="/profile">
                <Image
                  src="/assets/images/logob.svg"
                  width={40}
                  height={50}
                  className='rounded-full'
                  alt='profile'
                />
              </Link>
            </div>
          ) : (
            <>
            
            </>
          )}
      </div>
    </nav>
  )
}

export default Nav