'use client';
import {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateNote = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    note: '',
    tag: ''
  });
  const createNote = (e) => {

  }
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handlesubmit={createNote}
    />
  )
}

export default CreateNote


