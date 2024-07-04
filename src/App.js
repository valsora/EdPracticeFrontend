import { useState } from 'react';
import FormSection from './components/FromSection/FormSection';
import './App.css';

export default function App() {
  const [vacancies, setVacancies] = useState([]);

  return (
    <>
      <FormSection setVacancies={setVacancies} />
    </>
  );
}
