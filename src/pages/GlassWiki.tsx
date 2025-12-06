import React from 'react';
import { Search, Menu, Edit3, Share2, Info, ExternalLink, ChevronRight, AlertTriangle } from 'lucide-react';

export default function GlassWiki() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white pb-20">
      {/* 상단 전역 헤더는 Layout에서 렌더되므로 이 페이지에서는 내부 nav를 제거했습니다. */}

      <main className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- 메인 컨텐츠 영역 (좌측 8칸) --- */}
        <div className="lg:col-span-8 space-y-8">
          {/* 타이틀 섹션 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
              <span>DevKiwis</span>
              <ChevronRight className="w-4 h-4" />
              <span>프로젝트</span>
              <ChevronRight className="w-4 h-4" />
              <span>디자인 시스템</span>
            </div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              글래스모피즘
            </h1>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-medium border border-white/20 rounded-full bg-white/5 hover:bg-white/10 transition">최근 수정: 2025-12-05</button>
              <button className="px-3 py-1 text-xs font-medium border border-white/20 rounded-full bg-white/5 hover:bg-white/10 transition">역사</button>
              <button className="px-3 py-1 text-xs font-medium border border-white/20 rounded-full bg-white/5 hover:bg-white/10 transition">토론</button>
            </div>
          </div>

          {/* 나무위키 스타일 경고 박스 (모던 버전) */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm p-5 flex gap-4 items-start">
            <div className="p-2 bg-amber-500/20 rounded-lg shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="font-bold text-amber-400 mb-1">주의: 개발 중인 문서입니다.</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                이 문서는 현재 <strong>DevKiwis 프로젝트</strong>의 핵심 디자인 가이드를 설명하고 있습니다. 
                내용이 수시로 변경될 수 있으며, 실제 구현과 다를 수 있습니다.
              </p>
            </div>
          </div>

          {/* 본문 컨텐츠 (유리 카드) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl">
            {/* 개요 */}
            <section className="mb-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-500">1.</span> 개요
                </h2>
                <button className="text-xs text-slate-500 hover:text-emerald-400 transition flex items-center gap-1">
                  [편집] <Edit3 className="w-3 h-3" />
                </button>
              </div>
              <p className="text-slate-300 leading-8 text-lg">
                <span className="font-bold text-emerald-400">글래스모피즘(Glassmorphism)</span>은 
                사용자 인터페이스 디자인의 한 종류로, 배경 흐림 효과(Background blur)를 사용하여 마치 반투명한 유리가 떠 있는 듯한 느낌을 주는 것이 특징이다. 
                <span className="text-xs align-top text-emerald-500 cursor-pointer hover:underline ml-0.5">[1]</span>
                DevKiwis 프로젝트에서는 이를 나무위키의 정보 전달 구조와 결합하여 독창적인 UX를 제공한다.
              </p>
            </section>

            {/* 특징 */}
            <section>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-500">2.</span> 주요 특징
                </h2>
                <button className="text-xs text-slate-500 hover:text-emerald-400 transition flex items-center gap-1">
                  [편집] <Edit3 className="w-3 h-3" />
                </button>
              </div>
              <ul className="space-y-4 text-slate-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>
                    <strong>깊이감 (Depth):</strong> 배경의 흐림 처리와 얇은 흰색 테두리(Border)를 통해 요소 간의 계층 구조를 명확히 한다.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>
                    <strong>비비드한 배경:</strong> 유리의 투명함을 강조하기 위해 채도가 높고 어두운 그라디언트 배경을 주로 사용한다.
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* --- 우측 사이드바 (인포박스) (우측 4칸) --- */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl">
            <div className="bg-emerald-600/80 p-4 text-center backdrop-blur-sm border-b border-white/10">
              <h3 className="font-bold text-white text-lg">Glassmorphism</h3>
              <p className="text-xs text-emerald-100">Design System v2.0</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500"></div>
               <span className="relative z-10 font-bold text-white text-2xl drop-shadow-md">Sample Image</span>
            </div>
            <div className="divide-y divide-white/10 text-sm">
              <div className="grid grid-cols-3">
                <div className="p-3 font-semibold text-emerald-400 bg-white/5 flex items-center justify-center">유형</div>
                <div className="col-span-2 p-3 text-slate-200 flex items-center">UI 디자인 트렌드</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="p-3 font-semibold text-emerald-400 bg-white/5 flex items-center justify-center">최초 등장</div>
                <div className="col-span-2 p-3 text-slate-200 flex items-center">2020년 경</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="p-3 font-semibold text-emerald-400 bg-white/5 flex items-center justify-center">주요 속성</div>
                <div className="col-span-2 p-3 text-slate-200">
                  Backdrop Filter,<br/>
                  Translucency,<br/>
                  Pastel Colors
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="p-3 font-semibold text-emerald-400 bg-white/5 flex items-center justify-center">상태</div>
                <div className="col-span-2 p-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-green-400 font-bold">채택됨</span>
                </div>
              </div>
            </div>
          </div>

          {/* 목차 (TOC) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-lg">
             <h4 className="font-bold text-slate-200 mb-4 flex items-center gap-2">
               <Menu className="w-4 h-4 text-emerald-400" /> 목차
             </h4>
             <ul className="space-y-2 text-sm text-slate-400">
               <li className="hover:text-emerald-400 cursor-pointer transition flex gap-2">
                 <span className="text-emerald-500 font-mono">1.</span> 개요
               </li>
               <li className="hover:text-emerald-400 cursor-pointer transition flex gap-2">
                 <span className="text-emerald-500 font-mono">2.</span> 주요 특징
               </li>
               <li className="hover:text-emerald-400 cursor-pointer transition flex gap-2 ml-4">
                 <span className="text-emerald-500 font-mono">2.1.</span> CSS 구현
               </li>
               <li className="hover:text-emerald-400 cursor-pointer transition flex gap-2">
                 <span className="text-emerald-500 font-mono">3.</span> 여담
               </li>
             </ul>
          </div>

          {/* 하단 푸터 느낌의 카테고리 */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-xs text-slate-400">
            <div className="font-bold mb-2 text-slate-300">분류</div>
            <div className="flex flex-wrap gap-2">
               <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300 hover:bg-emerald-500/30 cursor-pointer transition">UI 디자인</span>
               <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300 hover:bg-emerald-500/30 cursor-pointer transition">CSS Framework</span>
               <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300 hover:bg-emerald-500/30 cursor-pointer transition">React</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
