import {Routes, Route } from 'react-router-dom';
import NavBar from './CustomComponents/Navigation/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';

import Home from './Pages/Home';
import Posts from './CustomComponents/Post/PostCard';
import CreatePost from './CustomComponents/Post/CreatePost'
import Bookmark from './CustomComponents/Post/Bookmark';
import Favorite from './CustomComponents/Post/Favorite';
import PostDetail from './CustomComponents/Post/PostDetail';

import UserProfile from './Pages/UserProfile';


;
const AppRoutes = () => (
    <>
       <NavBar/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/posts' element={<Posts/>}/>
       <Route path='favorities' element={<Favorite/>}/>
       <Route path='/bookmarks' element={<Bookmark/>}/>
       <Route path='/createPost' element={<CreatePost/>}/>
       <Route path="/login" element={<Login />} />
   
      <Route path="/post/:id" element={<PostDetail />}/>
      
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<UserProfile />} />
    
       </Routes>
    </>
 
);

export default AppRoutes;
