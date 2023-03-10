import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Community from '../pages/Community';
import Post from '../pages/Post';
import Write from '../pages/Write';
import Register from '../pages/Register';
import Login from '../pages/Login';
import My from '../pages/My';
import LayoutWithNavbar from '../components/main/LayoutWithNavbar';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWithNavbar />}>
          <Route path="" element={<Community />} />
          <Route path="post" element={<Navigate to="/" replace />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="write" element={<Write />} />
          <Route path="my" element={<My />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
