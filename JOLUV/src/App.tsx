import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/Mainpage.tsx';
import ChecklistPage from './pages/checklist/index.tsx';
import SummaryPage from './pages/summary/index.tsx'; // 👈 1. 새로 만든 Summary 페이지 import

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/checklist" element={<ChecklistPage />} />
      <Route path="/summary" element={<SummaryPage />} /> {/* 👈 2. /summary 경로 추가 */}
    </Routes>
  );
}

export default App;