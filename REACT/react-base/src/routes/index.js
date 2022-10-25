import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import Header from '../Components/Header';
import Login from '../Pages/Login';
import Page404 from '../Pages/Page404';

export default function Rotas() {
  return (
    // O path confere se a rota existe, caso não ele redireciona
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
