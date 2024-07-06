import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import InputWord from '../InputWord/InputWord';
import './FormSection.css';

export default function FormSection({ setVacancies, setLoading }) {
    const expSelectOptions = [
        {value: 'noExperience', label: 'нет опыта'},
        {value: 'between1And3', label: 'от 1 до 3 лет'},
        {value: 'between3And6', label: 'от 3 до 6 лет'},
        {value: 'moreThan6', label: 'больше 6 лет'}
    ]
    const empSelectOptions = [
        {value: 'full', label: 'полная занятость'},
        {value: 'part', label: 'частичная занятость'},
        {value: 'project', label: 'проектная работа'},
        {value: 'volunteer', label: 'волонтерство'},
        {value: 'probation', label: 'стажировка'}
    ]
    const schSelectOptions = [
        {value: 'fullDay', label: 'полный день'},
        {value: 'shift', label: 'сменный график'},
        {value: 'flexible', label: 'гибкий график'},
        {value: 'remote', label: 'удаленная работа'},
        {value: 'flyInFlyOut', label: 'вахтовый метод'}
    ]

    const [vacancyName, changeVacancyName] = useState('');
    const [companyName, changeCompanyName] = useState('');
    const [description, changeDescription] = useState('');
    const [expChoice, setExpChoice] = useState([]);
    const [empChoice, setEmpChoice] = useState([]);
    const [schChoice, setSchChoice] = useState([]);

    const parseVacancies = useCallback(async () => {
        setLoading(true);
        const expParams = [];
        expChoice.map((exp) => expParams.push(exp.value));
        const empParams = [];
        empChoice.map((emp) => empParams.push(emp.value));
        const schParams = [];
        schChoice.map((sch) => schParams.push(sch.value));
        const response = await fetch('http://127.0.0.1:8000/vacancies/parse', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name_text: vacancyName,
                company_text: companyName,
                description_text: description,
                experience: expParams,
                employment: empParams,
                schedule: schParams,
            })
        });
        const vacancies = await response.json();
        setVacancies(vacancies);
        setLoading(false);
    }, [vacancyName, companyName, description, setVacancies, setLoading, expChoice, empChoice, schChoice]);

    return (
        <section className='formSection' >
            <form
                className='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    parseVacancies();
                }}
            >
                <div className='boxForInputWord'>
                    <InputWord label={'названии вакансии'} htmlForAndId={'vacName'} value={vacancyName} changeValue={changeVacancyName} />
                    <InputWord label={'названии компании'} htmlForAndId={'comName'} value={companyName} changeValue={changeCompanyName} />
                    <InputWord label={'описании вакансии'} htmlForAndId={'descr'} value={description} changeValue={changeDescription} />
                </div>
                <Select
                    className='paramsSelect'
                    options={expSelectOptions} 
                    isMulti
                    placeholder={'выберите опыт'}
                    onChange={(choice) => setExpChoice(choice)}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 8,
                        colors: {
                            ...theme.colors,
                            primary: '#7bff71',
                            primary25: '#7bff71',
                            primary50: '#7bff71',
                            danger: '#151515',
                            dangerLight: '#7bff71',
                            neutral0: '#333333',
                            neutral10: '#7bff71',
                            neutral20: '#eeeeee',
                            neutral30: '#7bff71',
                            neutral40: '#7bff71',
                            neutral50: '#eeeeee',
                            neutral60: '#eeeeee',
                            neutral80: '#000000',
                        }
                    })}
                />
                <Select
                    className='paramsSelect'
                    options={empSelectOptions} 
                    isMulti
                    placeholder={'выберите вид занятости'}
                    onChange={(choice) => setEmpChoice(choice)}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 8,
                        colors: {
                            ...theme.colors,
                            primary: '#7bff71',
                            primary25: '#7bff71',
                            primary50: '#7bff71',
                            danger: '#151515',
                            dangerLight: '#7bff71',
                            neutral0: '#333333',
                            neutral10: '#7bff71',
                            neutral20: '#eeeeee',
                            neutral30: '#7bff71',
                            neutral40: '#7bff71',
                            neutral50: '#eeeeee',
                            neutral60: '#eeeeee',
                            neutral80: '#000000',
                        }
                    })}
                />
                <Select
                    className='paramsSelect'
                    options={schSelectOptions}
                    isMulti
                    placeholder={'выберите график'}
                    onChange={(choice) => setSchChoice(choice)}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 8,
                        colors: {
                            ...theme.colors,
                            primary: '#7bff71',
                            primary25: '#7bff71',
                            primary50: '#7bff71',
                            danger: '#151515',
                            dangerLight: '#7bff71',
                            neutral0: '#333333',
                            neutral10: '#7bff71',
                            neutral20: '#eeeeee',
                            neutral30: '#7bff71',
                            neutral40: '#7bff71',
                            neutral50: '#eeeeee',
                            neutral60: '#eeeeee',
                            neutral80: '#000000',
                        }
                    })}
                />
                <input
                    className='parseButton'
                    type='submit'
                    value={'найти вакансии'}
                    disabled={vacancyName === '' && companyName === '' && description === '' ? true : false}
                />
            </form>
            <nav style={{textAlign: 'center', marginTop: '20px'}} >
                <Link to={'/all'} className='linkToAll' >посмотреть все вакансии</Link>
            </nav>
        </section>
    );
}
