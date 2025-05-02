import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FetchPost } from '../../Slices/PostSlice';
import { motion } from 'framer-motion';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, postData, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(FetchPost());
  }, [dispatch]);

  const post = postData.find((p) => p.id === parseInt(id));

  if (loading) return <p className="text-center mt-10 text-blue-500">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!post) return <p className="text-center mt-10 text-gray-500">Post not found.</p>;

  const fakeDate = new Date(2023, post.id % 12, post.id % 28 + 1).toDateString();

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="bg-white rounded-3xl shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>

        <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
          <span>📅 {fakeDate}</span>
          <span>👤 Author #{post.userId}</span>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.body}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-semibold tracking-wide"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="text-gray-600 text-sm mb-6">
          👍 <span className="font-semibold">{post.reactions?.likes ?? 0}</span> Likes &nbsp;|&nbsp;
          👎 <span className="font-semibold">{post.reactions?.dislikes ?? 0}</span> Dislikes
        </div>

        <Link
          to="/"
          className="inline-block mt-4 text-white bg-[#547484] hover:bg-[#409084] px-6 py-2 rounded-full transition"
        >
          ← Back to Blog
        </Link>
      </motion.div>
    </div>
  );
};

export default PostDetail;
