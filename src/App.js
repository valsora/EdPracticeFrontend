import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParsePage from './components/ParsePage/ParsePage';
import AllVacanciesPage from './components/AllVacanciesPage/AllVacanciesPage';
import './App.css';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ParsePage />} />
          <Route path='all' element={<AllVacanciesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
