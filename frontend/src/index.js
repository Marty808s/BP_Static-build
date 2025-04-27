import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
//import Test from './pages/TestPage';
import LoginPage from "@pages/LoginPage";
import NabidkaPage from '@pages/NabidkaPage';
import NabidkaDetailPage from '@pages/NabidkaDetailPage';
import ProfilPage from '@pages/ProfilPage';
import PraxePage from '@pages/PraxePage';
import TextEditor from '@pages/TEST_TextEditor';
import TEST_FORM from '@pages/TEST_FORMS';

import reportWebVitals from './reportWebVitals';
import UserProvider from '@hooks/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/nabidka" element={<NabidkaPage />} />
          <Route path="/nabidka/:id" element={<NabidkaDetailPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/praxe" element={<PraxePage />} />
          <Route path="/TEST" element={<TextEditor />} />
          <Route path="/test_forms" element={<TEST_FORM />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);


reportWebVitals();
