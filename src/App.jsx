import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PostDetail from './Pages/PostDetail';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserProfile from './Pages/UserProfile';
import NavBar from './CustomComponents/Navigation/NavBar';

const AppRoutes = () => (
    <>
       <NavBar/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:slug" element={<PostDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<UserProfile />} />
       </Routes>
    </>
 
);

export default AppRoutes;
