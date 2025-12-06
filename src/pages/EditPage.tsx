import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

export default function EditPage() {
  const { docTitle } = useParams<{ docTitle: string }>();
  const navigate = useNavigate();
  const decodedTitle = docTitle ? decodeURIComponent(docTitle) : '';

  // 폼 상태 관리
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('기타');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 1. 기존 데이터 불러오기 (수정 모드일 경우)
  useEffect(() => {
    const fetchOriginalData = async () => {
      if (!decodedTitle) return;
      
      setLoading(true);
      
      // 기존 문서가 있는지 확인
      const { data } = await supabase
        .from('wiki_pages')
        .select('content, category')
        .eq('title', decodedTitle)
        .maybeSingle();

      if (data) {
        setContent(data.content || '');
        setCategory(data.category || '기타');
      }
      // 데이터가 없으면(새 문서면) 빈 상태 유지
      setLoading(false);
    };

    fetchOriginalData();
  }, [decodedTitle]);

  // 2. 저장 버튼 클릭 핸들러
  const handleSave = async () => {
    if (!content.trim()) return alert('내용을 입력해주세요!');
    
    setSaving(true);

    // 현재 로그인한 사용자 확인
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert('로그인이 필요합니다!');
      setSaving(false);
      return;
    }

    // Upsert: 있으면 수정, 없으면 생성 (title 기준)
    const { error } = await supabase
      .from('wiki_pages')
      .upsert({
        title: decodedTitle,       // 제목 (Unique Key)
        content: content,
        category: category,
        last_updated_by: user.id,  // 현재 로그인한 유저 ID
        updated_at: new Date().toISOString(), // 수정 시간 갱신
      }, { onConflict: 'title' }); // title이 같으면 덮어쓰기

    if (error) {
      console.error('Error saving page:', error);
      alert('저장에 실패했습니다.');
    } else {
      // 저장 성공 시 해당 문서 뷰 페이지로 이동
      navigate(`/wiki/${encodeURIComponent(decodedTitle)}`);
    }
    
    setSaving(false);
  };

  if (loading) return <div className="p-8">로딩 중...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        편집: {decodedTitle}
      </h1>

      <div className="space-y-4">
        {/* 카테고리 선택 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">카테고리</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="학생회">학생회</option>
            <option value="동아리">동아리</option>
            <option value="시설">시설</option>
            <option value="선생님">선생님</option>
            <option value="기타">기타</option>
          </select>
        </div>

        {/* 본문 에디터 (일단 textarea로 시작, 나중에 마크다운 에디터 라이브러리 교체 가능) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">내용 (Markdown 지원)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[500px] p-4 border border-gray-300 rounded-md font-mono text-sm focus:ring-2 focus:ring-blue-500"
            placeholder="# 제목을 입력하세요&#13;&#10;내용을 자유롭게 작성하세요."
          />
        </div>

        {/* 버튼 영역 */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {saving ? '저장 중...' : '문서 게시하기'}
          </button>
        </div>
      </div>
    </div>
  );
}