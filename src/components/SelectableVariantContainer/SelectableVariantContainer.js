import './SelectableVariantContainer.css';

export default function SelectableVariantContainer({text}) {
    return (
        <div className='divSVC'>
            <button className='selectButton'></button>
            <p className='pSVC'>{text}</p>
        </div>
    );
}