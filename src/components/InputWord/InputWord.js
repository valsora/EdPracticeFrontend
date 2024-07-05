import './InputWord.css';

export default function InputWord({ label, htmlForAndId, value, changeValue }) {
    return (
        <div className='inputWordBox' >
            <label className='labelInputWord' htmlFor={htmlForAndId} >Поиск в {label}:</label>
            <input
                type='text'
                id={htmlForAndId}
                className='inputField'
                value={value}
                onChange={(e) => changeValue(e.target.value)}
            />
        </div>
    );
}
