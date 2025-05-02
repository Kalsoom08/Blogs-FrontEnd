import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPost } from '../../Slices/PostSlice';

const PostCategory = () => {
  const dispatch = useDispatch();
  const { loading, postData, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(FetchPost());
  }, [dispatch]);


  const allTags = [...new Set(postData.flatMap((post) => post.tags))];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {loading && <p className="text-blue-500 text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <ul className="flex flex-wrap justify-center gap-3">
        {allTags.map((tag, index) => (
          <li
            key={index}
            className="bg-[#3f7fa0] text-white px-4 capitalize py-2 rounded-full text-sm font-semibold shadow"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCategory;
