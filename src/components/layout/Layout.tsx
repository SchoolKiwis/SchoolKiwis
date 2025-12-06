import { Outlet, Link } from 'react-router-dom';
import { Search, PenLine, LogIn, Menu } from 'lucide-react'; // 아이콘 가져오기

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* --- 헤더 (유리 질감 효과) --- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* 1. 로고 영역 */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-blue-700 transition">
              W
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition">
              우리학교 위키
            </span>
          </Link>
          
          {/* 2. 검색창 (데스크탑용) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="문서 검색 (예: 급식실)" 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
            />
          </div>

          {/* 3. 우측 메뉴 */}
          <div className="flex items-center gap-3">
            <Link 
              to="/wiki/edit/새문서" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition"
            >
              <PenLine className="w-4 h-4" />
              새 문서
            </Link>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition transform hover:-translate-y-0.5">
              <LogIn className="w-4 h-4" />
              로그인
            </button>
            {/* 모바일 메뉴 버튼 */}
            <button className="md:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* --- 본문 --- */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* --- 푸터 --- */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 <span className="font-bold text-slate-700">School Wiki</span> Project. 
            <br className="sm:hidden"/> 
             Students & Teachers Together.
          </p>
        </div>
      </footer>
    </div>
  );
}