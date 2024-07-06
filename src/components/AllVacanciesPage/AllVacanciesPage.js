import { useEffect, useState } from 'react';
import ParsedVacsSection from '../ParsedVacsSection/ParsedVacsSection';
import './AllVacanciesPage.css';

export default function AllVacanciesPage() {
    const [vacancies, setVacancies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getAllVacancies() {
            setLoading(true)
            const response = await fetch('http://127.0.0.1:8000/vacancies/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const vacancies = await response.json();
            setVacancies(vacancies);
            setLoading(false)
        }

        getAllVacancies();
    }, []);

    return(
        <>
            <ParsedVacsSection vacancies={vacancies} loading={loading} isAll={true} />
        </>
    );
}
