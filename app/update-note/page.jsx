'use client';
import {useEffect, useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';


import Form from '@components/Form';

const EditNote = () => {
  const router = useRouter();
//   const { data: session } = useSession();
  const searchParams = useSearchParams();
  const noteId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    note: "",
    tag: ""
  });

  useEffect(() => {
    const getNotedetails = async () => {
        const response = await fetch(`/api/note/${noteId}`);
        const data = await response.json();

        setPost({
            note: data.note,
            tag: data.tag
        })
    }

    if(noteId) getNotedetails();
  }, [noteId]);
  console.log(noteId);

  const updateNote = async (e) => {
    // e.prevenDefault();
    setSubmitting(true);

    if(!noteId) return alert('Note ID not found');

    try {
      const response = await fetch(`/api/note/${noteId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          note: post.note,
          tag: post.tag,
        }),
      });
      
    //   if(response.ok) {
    //     router.push('/');
    //   }
    } catch(error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateNote}
    />
  );
};

export default EditNote;


