import React from 'react'
import Hero from '../CustomComponents/Hero/Hero'
import FeaturedPost from '../CustomComponents/Post/FeaturedPost'
import PostCard from '../CustomComponents/Post/PostCard';

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedPost/>
      <PostCard/>
    </div>
  )
}

export default Home