import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../Slices/PostSlice';
import toast from 'react-hot-toast';


const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(), 
      title,
      body,
      tags: tags.split(',').map((tag) => tag.trim()), 
      reactions: {
        likes: parseInt(likes),
        dislikes: parseInt(dislikes),
      },
    };

    dispatch(createPost(newPost)); 
   toast.success("Post created successfully!");
    setTitle('');
    setBody('');
    setTags('');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-[#2C7865]">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          className="w-full border p-3 rounded-md"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-3 rounded-md"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <input
          className="w-full border p-3 rounded-md"
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
  
        <button
          type="submit"
          className="bg-[#2C7865] text-white py-2 px-6 rounded-md hover:bg-[#225b4c] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
