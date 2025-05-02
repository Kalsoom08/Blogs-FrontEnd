import { configureStore } from "@reduxjs/toolkit";
import Post from './src/Slices/PostSlice';
import Bookmark from './src/CustomComponents/Post/Bookmark';
import Fav from './src/CustomComponents/Post/Favorite';
import Feature from './src/CustomComponents/Post/FeaturedPost';
import Category from './src/CustomComponents/Post/PostCategory';

const store = configureStore({
reducer:{
    post : Post ,
   

}
})

export default store