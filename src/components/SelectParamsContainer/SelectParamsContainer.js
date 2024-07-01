import SelectableVariantContainer from '../SelectableVariantContainer/SelectableVariantContainer';
import './SelectParamsContainer.css';

export default function SelectParamsContainer({title, var1, var2, var3, var4, var5}) {
    return (
        <div className='divSPC' >
            <h4>{title}:</h4>
            <SelectableVariantContainer text={var1} />
            <SelectableVariantContainer text={var2} />
            <SelectableVariantContainer text={var3} />
            <SelectableVariantContainer text={var4} />
            {title !== 'Опыт' &&
                <SelectableVariantContainer text={var5} />
            }
        </div>
    );
}