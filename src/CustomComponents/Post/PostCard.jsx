import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPost } from '../../Slices/PostSlice';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const PostCard = () => {
  const dispatch = useDispatch();
  const { loading, postData, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(FetchPost());
  }, [dispatch]);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#409084] mb-10"> Latest Blogs </h1>

      {loading && <p className="text-blue-500 text-center text-lg">Loading...</p>}
      {error && <p className="text-red-500 text-center text-lg">{error}</p>}
      {!loading && postData.length === 0 && <p className="text-center text-gray-500">No Posts Available.</p>}

      <div className="grid md:grid-cols-2 gap-6">
        {postData.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 60 }}
          >
            <h3 className="text-2xl font-semibold text-[#409084] mb-2">{post.title}</h3>
            <p className="text-[#547484] mb-4">{post.body}</p>
            <div className="text-sm text-gray-500 mb-3">
              👍 Likes: {post.reactions?.likes ?? 0} | 👎 Dislikes: {post.reactions?.dislikes ?? 0}
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-[#547484] px-3 py-1 rounded-full text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              to={`/post/${post.id}`}
              className="text-[#547484] font-medium hover:underline"
            >
              Details →
            </Link>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
