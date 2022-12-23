import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Community from '../pages/Community';
import Post from '../pages/Post';
import Write from '../pages/Write';
import Register from '../pages/Register';
import Login from '../pages/Login';
import My from '../pages/My';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Community />} />
        <Route path="/post/" element={<Navigate to="/" replace />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/write" element={<Write />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
