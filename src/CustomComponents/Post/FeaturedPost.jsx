import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPost } from '../../Slices/PostSlice';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const FeaturedPost = () => {
  const dispatch = useDispatch();
  const { loading, postData, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(FetchPost());
  }, [dispatch]);

  const featureData = postData.filter((post) => post.reactions?.likes > 1000);

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto bg-gradient-to-b from-[#f0fdfa] to-white min-h-screen">
      <motion.h1
        className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2C7865] to-[#4BB7A7] mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Featured Blogs
      </motion.h1>

      {loading && <p className="text-blue-500 text-center text-lg">Loading...</p>}
      {error && <p className="text-red-500 text-center text-lg">{error}</p>}
      {!loading && featureData.length === 0 && (
        <p className="text-center text-gray-500">No Featured Posts Available.</p>
      )}

      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {featureData.map((post) => (
          <motion.div
            key={post.id}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#40908418] to-[#87bad320] rounded-3xl p-6 shadow-md border border-gray-100 transition duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-[#2C7865]">{post.title}</h3>
              <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
                🔥 Popular
              </span>
            </div>

            <p className="text-[#547484] mb-4 text-sm leading-relaxed">
              {post.body.slice(0, 120)}...
            </p>

            <div className="text-sm text-gray-500 mb-3">
              👍 <span className="text-green-700 font-semibold">{post.reactions?.likes ?? 0}</span> &nbsp;|&nbsp;
              👎 <span className="text-red-500 font-semibold">{post.reactions?.dislikes ?? 0}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              to={`/post/${post.id}`}
              className="inline-block mt-2 text-sm font-medium text-[#2C7865] hover:text-[#004D40] transition duration-200"
            >
              ➤ Read More
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedPost;
