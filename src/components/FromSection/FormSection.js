import { useEffect, useState } from 'react';
import InputWord from '../InputWord/InputWord';
import './FormSection.css';

export default function FromSection({ setVacancies }) {
    const [vacancyName, changeVacancyName] = useState('');
    const [companyName, changeCompanyName] = useState('');
    const [description, changeDescription] = useState('');

    async function parseVacancies() {
        const response = await fetch('http://127.0.0.1:8002/vacancies/parse', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name_text: vacancyName,
                company_text: companyName,
                description_text: description,
                experience: [],
                employment: [],
                schedule: []
            })
        });
        const vacancies = await response.json();
        setVacancies(vacancies);
    }

    return (
        <section className='formSection' >
            <form
                className='form'
                onSubmit={(e) => {
                    e.preventDefault(); 
                    parseVacancies();
                    changeVacancyName('');
                    changeCompanyName('');
                    changeDescription('');
                }}
            >
                <div className='boxForInputWord'>
                    <InputWord label={'названии вакансии'} htmlForAndId={'vacName'} value={vacancyName} changeValue={changeVacancyName} />
                    <InputWord label={'названии компании'} htmlForAndId={'comName'} value={companyName} changeValue={changeCompanyName} />
                    <InputWord label={'описании вакансии'} htmlForAndId={'descr'} value={description} changeValue={changeDescription} />
                </div>
                <input
                    className='parseButton'
                    type='submit'
                    value={'найти вакансии'}
                    disabled={vacancyName === '' && companyName === '' && description === '' ? true : false}
                />
            </form>
        </section>
    );
}