import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 👈 Link 컴포넌트 import

const LoginPage: React.FC = () => {
  // 이메일과 비밀번호 입력을 기억하기 위한 상태(state)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼을 눌렀을 때 실행될 함수
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 것을 방지
    console.log('로그인 시도:', { email, password });
    // TODO: 여기에 실제 서버로 로그인 요청을 보내는 API 호출 코드를 추가합니다.
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center w-full">
        {/* Logo (클릭 시 메인 페이지로 이동) */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          KNU
        </Link>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg mx-8">
          <input
            type="text"
            placeholder="search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">Q</span>
        </div>

        {/* Login Button in Header */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
          Login
        </button>
      </header>

      {/* Login Form Section */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">로그인</h1>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@knu.ac.kr"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;