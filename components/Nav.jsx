"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
 const { data: session } = useSession();
 const [providers, setProviders] = useState(null);
 const [toggleDropdown, setToggleDropdown] = useState(false);

 useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
    setUpProviders();
 }, []);
 
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
          {session?.user ? (
            <div className='flex gap-3 sm:gap-5'>
              <Link href='/create-notable' className='blue_btn'>
                Create Post
              </Link>
              <button type='button' onClick={signOut}
              className='outline_btn'>
                signOut
              </button>

              <Link href="/profile">
                <Image
                  src={session?.user.image}
                  width={40}
                  height={50}
                  className='rounded-full'
                  alt='profile'
                />
              </Link>
            </div>
          ) : (
            <>
              { providers &&
                Object.values(providers).map((provider) => 
                (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='blue_btn'
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
      </div>

      {/*Mobile responsive */}
      <div className='sm:hidden flex relative'>
         {session?.user ? (
          <div className='flex'>
            <Image
                  src={session?.user.image}
                  width={40}
                  height={50}
                  className='rounded-full'
                  alt='profile'
                  onClick={() => setToggleDropdown((prev) => 
                    !prev
                  )}
                />

                {toggleDropdown && (
                  <div className='dropdown'>
                    <Link
                      href="/profile"
                      className='dropdown_link'
                      onClick={() => setToggleDropdown(false)}
                    >
                      My Profile
                    </Link>

                    <Link
                      href='/create-notable'
                      className='dropdown_link'
                      onClick={() => setToggleDropdown(false)}
                    >
                      Create Note
                    </Link>

                    <button
                      type='button'
                      onClick={() => {
                        setToggleDropdown(false)
                        signOut();
                      }}
                      className='black_btn w-full mt-1'
                    >
                      Sign Out
                    </button>
                  </div>
                )}
          </div>
         ): (
          <>
              { providers &&
                Object.values(providers).map((provider) => 
                (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='blue_btn'
                  >
                    Sign In
                  </button>
                ))}
            </>
         )}
      </div>

    </nav>
  )
}

export default Nav