import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTeam from './components/CreateTeam';
import './index.css';
import Login from './Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="createteam" element={<CreateTeam/>}/>
    </Routes>
  </BrowserRouter>
);
