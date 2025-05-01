import {Routes, Route } from 'react-router-dom';
import NavBar from './CustomComponents/Navigation/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';

import Home from './Pages/Home';
import Posts from './Pages/Post';
import CreatePost from './CustomComponents/Post/CreatePost'
import Bookmark from './CustomComponents/Post/Bookmark';
import Favorite from './CustomComponents/Post/Favorite';
import PostDetail from './Pages/PostDetail';

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
     
      <Route path="/posts/:slug" element={<PostDetail />} />
      
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<UserProfile />} />
    
       </Routes>
    </>
 
);

export default AppRoutes;
