import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>🏫 우리 학교 위키</h1>
      <p>방문을 환영합니다!</p>
      {/* 테스트용 링크 */}
      <Link to="/wiki/메인페이지">메인페이지로 가기</Link>
    </div>
  );
}
export default Home;