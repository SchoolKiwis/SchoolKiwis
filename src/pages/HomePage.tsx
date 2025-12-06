import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Edit3, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12 animate-fade-in-up">
      
      {/* 1. 히어로 섹션 (배너) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-10 md:p-16 shadow-2xl">
        {/* 배경 장식 원 */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-white opacity-10 blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-4 border border-white/30">
            우리 학교의 모든 지식 🎓
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            함께 만들어가는 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-emerald-200">
              학교 위키 프로젝트
            </span>
          </h1>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg">
            학교 생활 꿀팁부터 선생님 정보, 동아리 활동까지.<br/>
            여러분의 지식으로 위키를 채워주세요!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/wiki/edit/새문서" 
              className="flex items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg transform hover:-translate-y-1"
            >
              <Edit3 className="w-5 h-5" />
              문서 작성하기
            </Link>
            <Link 
              to="/wiki/학교소개" 
              className="flex items-center gap-2 bg-blue-700/50 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition"
            >
              <BookOpen className="w-5 h-5" />
              둘러보기
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 인기 문서 & 최근 문서 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 인기 문서 카드 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
            <TrendingUp className="text-red-500 w-6 h-6" />
            <h2 className="text-xl font-bold text-slate-800">지금 뜨는 인기 문서 🔥</h2>
          </div>
          <ul className="space-y-3">
            {['급식실', '체육대회', '학생회', '매점 꿀조합'].map((item, index) => (
              <li key={index}>
                <Link to={`/wiki/${item}`} className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center bg-slate-100 text-slate-500 text-xs font-bold rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition">{item}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 최근 변경 문서 카드 (더미 데이터) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
            <BookOpen className="text-blue-500 w-6 h-6" />
            <h2 className="text-xl font-bold text-slate-800">최근 변경된 문서 🕒</h2>
          </div>
          <ul className="space-y-3">
            {['교칙 (2025 개정)', '1학년 3반', '동아리 목록', '선생님'].map((item, index) => (
              <li key={index}>
                <Link to={`/wiki/${item}`} className="block p-3 rounded-lg hover:bg-slate-50 transition">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-700 font-medium hover:text-blue-600">{item}</span>
                    <span className="text-xs text-slate-400">방금 전</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">
                    문서의 내용이 수정되었습니다...
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}