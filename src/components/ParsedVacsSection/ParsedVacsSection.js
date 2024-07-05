import './ParsedVacsSection.css';

export default function ParsedVacsSection({ vacancies, loading, isAll }) {
    let incr = 0;

    return (
        <section className='parsedVacsSection'>
            {loading && <h2 style={{color: '#eeeeee'}} >...Загрузка...</h2>}
            {!loading && 
                <ul className='parsedVacsUl' >
                    {vacancies.map((vac) => {
                        incr++;
                        return (
                            <li key={parseInt(vac.vac_id)} className='parsedVacsLi' >
                                {isAll && <h3 style={{margin: '0'}} >№{incr}</h3>}
                                <h3 style={{marginBottom: '10px', marginTop: '4px'}} >{vac.job_name}</h3>
                                {(vac.salary_from !== null && vac.salary_to !== null && vac.salary_from !== vac.salary_to) && <p style={{marginBottom: '10px'}} >зарплата от {vac.salary_from} до {vac.salary_to} руб</p>}
                                {(vac.salary_from !== null && vac.salary_to !== null && vac.salary_from === vac.salary_to) && <p style={{marginBottom: '10px'}} >зарплата {vac.salary_to} руб</p>}
                                {(vac.salary_from !== null && vac.salary_to === null) && <p style={{marginBottom: '10px'}} >зарплата от {vac.salary_from} руб</p>}
                                {(vac.salary_from === null && vac.salary_to !== null) && <p style={{marginBottom: '10px'}} >зарплата до {vac.salary_to} руб </p>}
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                                    <h4 style={{color: '#7bff71', width: '15%'}} >{vac.company_name}</h4>
                                    <h5 style={{width: '55%', textAlign: 'center'}} >{vac.requirement}</h5>
                                    <h5 style={{width: '10%', textAlign: 'center'}} >{vac.experience}</h5>
                                    <h5 style={{width: '10%', textAlign: 'center'}} >{vac.employment}</h5>
                                    <h5 style={{width: '10%', textAlign: 'center'}} >{vac.schedule}</h5>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            }
        </section>
    );
}
