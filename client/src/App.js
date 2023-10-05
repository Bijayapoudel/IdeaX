/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
// import Header from './Header';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreatePost from './Pages/CreatePost';
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { useState } from 'react';

function App() {
  const [postCreated, setPostCreated] = useState(false);
  const navigate = useNavigate();

  const handlePostCreated = () => {
    setPostCreated(true);
    navigate('/');
  }


  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path='/register' element={<RegisterPage />} />
        <Route index element={<IndexPage postCreated={postCreated} />} />
        <Route path={'/createpost'} element={<CreatePost on postCreated={handlePostCreated} />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  )
};

export default App;



