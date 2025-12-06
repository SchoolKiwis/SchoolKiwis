import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="wiki/edit/:docTitle" element={<EditPage />} />
          <Route path="wiki/:docTitle" element={<WikiPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;