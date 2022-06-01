import cn from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    id: string;
    type: string;
    label: string;
    unit?: string;
    error?: string;
    placeholder?: string;
    register?: UseFormRegisterReturn;
    onChange?: (e:any) => void
}
const InputField = ({
  label, type = 'text', id, placeholder, register, error, unit, onChange,
}: Props) => (
  <div className="flex flex-col w-full">
    <label className="label" htmlFor={id}>{label}</label>
    <input onChange={onChange} {...register} placeholder={placeholder} className={cn('input', { 'error-input': error })} id={id} type={type} />
    {error && <span className="error-message">{error}</span>}
  </div>
);

export default InputField;
