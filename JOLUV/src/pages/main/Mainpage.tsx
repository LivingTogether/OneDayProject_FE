import React from 'react';
import { useNavigate } from 'react-router-dom';

// 아이콘을 위한 간단한 placeholder 컴포넌트
const IconPlaceholder: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`bg-gray-300 rounded-full w-12 h-12 mb-4 mx-auto ${className}`}></div>
);

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  // 페이지 이동을 처리하는 함수들 (필요에 따라 경로 수정)
  const handleLoginClick = () => {
    // navigate('/login'); // 로그인 페이지 경로
    console.log("Login button clicked");
  };

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* 1. Header Section */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">KNU</div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg mx-4">
          <input
            type="text"
            placeholder="search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">Q</span>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLoginClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </header>

      {/* 2. Main Content Section */}
      <main className="p-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">KNU 졸업요건</h1>
          <p className="text-lg text-gray-600">"컴퓨터학부 당신을 위한 페이지 입니다."</p>
        </div>

        {/* Icon Button Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
          {/* Card 1: AI */}
          <div
            onClick={() => console.log("AI card clicked")}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <IconPlaceholder />
            <h2 className="text-xl font-semibold text-gray-700">수강과목정리</h2>
          </div>
          {/* Card 2: Checklist Page */}
          <div
            onClick={() => handleCardClick('/checklist')}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <IconPlaceholder />
            <h2 className="text-xl font-semibold text-gray-700">졸업요건 checklist</h2>
          </div>
          {/* Card 3: Summary Page */}
          <div
            onClick={() => handleCardClick('/summary')}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <IconPlaceholder />
            <h2 className="text-xl font-semibold text-gray-700">학점 기록</h2>
          </div>
          {/* Card 4: AI Plan */}
          <div
            onClick={() => console.log("AI Plan card clicked")}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <IconPlaceholder />
            <h2 className="text-xl font-semibold text-gray-700">AI 추천 계획표</h2>
          </div>
        </div>

        {/* List Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">List</h3>
          <ul className="space-y-2">
            <li className="p-2 border-b">항목 1</li>
            <li className="p-2 border-b">항목 2</li>
            <li className="p-2">항목 3</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default MainPage;