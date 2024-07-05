import { useEffect, useState } from 'react';
import FormSection from "../FormSection/FormSection";
import ParsedVacsSection from "../ParsedVacsSection/ParsedVacsSection";
import './ParsePage.css';

export default function ParsePage() {
    const [vacancies, setVacancies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [, rerender] = useState();
  
    useEffect(() => {rerender()}, [vacancies]);

    return (
        <>
            <FormSection setVacancies={setVacancies} setLoading={setLoading} />
            <ParsedVacsSection vacancies={vacancies} loading={loading} isAll={false} />
        </>
    );
}
