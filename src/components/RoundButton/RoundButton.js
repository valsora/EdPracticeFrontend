import './RoundButton.css';

export default function RoundButton({text, onClick}) {
    return (
        <button className='roundButton' onClick={() => onClick()} >{text}</button>
    )
}