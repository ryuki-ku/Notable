import React from 'react';
import Link from 'next/link';

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handlesubmit
}) => {
  return (
    <section className='w-full max-x-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing Note to the world and 
        let your creative run with the power 
        of AI platform.
      </p>

      <form
        onSubmit={handlesubmit}
        className='mt-10 w-full max-w-2xl flex
        flex-col gap-7 glassmorphism'
      >
        {/* Make user write note here */}
        <label> 
          <span className='font-satoshi font-semibold
          text-base text-gray-800'>
            Your AI Noteable
          </span>

          <textarea
            value={post.note}
            onChange={(e) => setPost({ ...post, 
              note: e.target.value})}
              placeholder='write your first note here'
              required
              className='form_textarea'
          />  
        </label>
          {/* Set specific tag name here */}
        <label>
          <span className='font-satoshi font-semibold
          text-base text-gray-800'>
            Tag{` `}
            <span className='font-normal'>(#product, #idea, #webdevelopment)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, 
              tag: e.target.value})}
              placeholder='#tag'
              required
              className='form_input'
          />  
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
              Cancel
          </Link>   

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-sky-600 
            rounded-full text-white'
          >
            {submitting ? `${type}` : type}
          </button> 
        </div>
      </form>
    </section>
  )
}

export default Form