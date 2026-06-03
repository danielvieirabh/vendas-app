import { InputHTMLAttributes } from 'react';
import { formatReal } from 'app/util/money/index'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange?: (value) => void;
    label: string,
    columnClasses?: string;
    currency?: boolean;
}

export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    columnClasses,
    id,
    currency,
    ...inputProps //Pega todas as propriedades
}: InputProps) => { //Referencia ele

    const onInputChange = (event) => {
        let value = event.target.value;

        if (value && currency) {
            const cleanValue = value.replace(/\D/g, "");
            // Transforma em centavos e formata
            value = formatReal.format(Number(cleanValue) / 100);
        }

        if (onChange) {
            onChange(value)
        }
    }


    return (
        <div className={`field column ${columnClasses} `}>
            <label className='label' htmlFor={id} >{label}</label>
            <div className='control'>
                {/* Tem que passar o onchange para inserir valores */}
                <input id={id} {...inputProps}
                    onChange={onInputChange}
                    className='input' placeholder={inputProps.placeholder} />
            </div>
        </div>
    )
}