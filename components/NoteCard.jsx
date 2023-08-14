'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const NoteCard = ({post, handleTagClick, handleEdit, handleDelete}) => 
{
  const [copied, setCopied] = useState("");
  const pathName = usePathname();
  const {data: session} = useSession();
  const router = useRouter();

  const handleCopy = () => {
    setCopied(post.note);
    navigator.clipboard.writeText(post.note);
    setTimeout(() => {
      setCopied('')
    }, 3000);
  }
  return (
    <div className='prompt_card' >
      <div className='flex justify-between 
        items-start gap-5'>
        <div className='flex-1 flex justify-start 
          items-center gap-3 cursor-pointer'>

          {/*render user's profile image */}
          {session?.user ? <Image
            src={session?.user.image}
            alt="user_image"
            width={40}
            height={40}
            className='rounded-full object-contain'
          /> : <Image
          src={post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className='rounded-full object-contain' /> 
          }
              {/*Render username and email */}
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold
             text-gray-950'>
              {post.creator.username}
            </h3>

            <p className='font-inter text-sm
             text-gray-600'>
              {post.creator.email}
            </p>
            {console.log(session)}
          </div>
        </div>
              {/* Create a copy note button */}
        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={copied === post.note 
              ? '/assets/icons/tick.svg'
              : '/assets/icons/copy.svg'
            }
            alt={copied === post.note ? "tick_icon" : "copy_icon"}
            width={12}  
            height={12}
          />
        </div>
      </div>
              {/* Display user's note */}
      <p className='my-4 font-satoshi text-sm text-gray-800'>
        {post.note}
      </p>
              {/* Display user's tag */}
      <p className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick
        (post.tag)}
      >
        {post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className='mt-5 flex-center gap-4 border-t
         border-gray-200 pt-3'>
          <button 
            type='button'
            className='outline_green_btn'
            onClick={handleEdit}
          >
            Edit
          </button>

          <button 
            type='button'
            className='outline_orange_btn'
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default NoteCard