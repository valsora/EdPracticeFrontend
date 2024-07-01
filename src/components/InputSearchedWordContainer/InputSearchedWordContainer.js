import './InputSearchedWordContainer.css'

export default function InputSearchedWordContainer({text, inputText, changeInputText}) {
    return (
        <>
            <div className='divISWC'>
                <p className='pISWC'>Поиск в {text}:</p>
                <input type='text' value={inputText} onChange={(e) => changeInputText(e.target.value)} />
            </div>
        </>
    );
}