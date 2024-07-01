import { useState } from 'react';
import InputSearchedWordContainer from './components/InputSearchedWordContainer/InputSearchedWordContainer';
import SelectParamsContainer from './components/SelectParamsContainer/SelectParamsContainer';
import RoundButton from './components/RoundButton/RoundButton';
import './App.css';

export default function App() {
  const [nameInput, changeNameInput] = useState('');
  const [companyInput, changeCompanyInput] = useState('');
  const [descriptionInput, changeDescriptionInput] = useState('');
  const [isAddParamsOpened, changeIsAddParamsOpened] = useState(false);

  return (
    <>
      <div className='boxForISWC'>
        <InputSearchedWordContainer text={'названии вакансии'} inputText={nameInput} changeInputText={changeNameInput} />
        <InputSearchedWordContainer text={'названии компании'} inputText={companyInput} changeInputText={changeCompanyInput} />
        <InputSearchedWordContainer text={'описании вакансии'} inputText={descriptionInput} changeInputText={changeDescriptionInput} />
      </div>
      {isAddParamsOpened &&
        <div className='boxForSPC' >
          <SelectParamsContainer title={'Опыт'} var1={'нет опыта'} var2={'от 1 до 3 лет'} var3={'от 3 до 6 лет'} var4={'более 6 лет'} />
          <SelectParamsContainer title={'Вид занятости'} var1={'полная занятость'} var2={'частичная занятость'} var3={'проектная работа'} var4={'волонтерство'} var5={'cтажировка'} />
          <SelectParamsContainer title={'График работы'} var1={'полный день'} var2={'сменный график'} var3={'гибкий график'} var4={'удаленная работа'} var5={'вахтовый метод'} />
        </div>
      }
      <div className='divForBottomButton' >
        <RoundButton 
          text={isAddParamsOpened ? '▲' : '▼'} 
          onClick={() => isAddParamsOpened ? changeIsAddParamsOpened(false) : changeIsAddParamsOpened(true)} 
        />
      </div>
    </>
  );
}
