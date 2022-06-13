import cn from 'classnames';
import { ChangeEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    id: string;
    type: string;
    label: string;
    error?: string;
    placeholder?: string;
    register?: UseFormRegisterReturn;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const InputField = ({
  label, type = 'text', id, placeholder, register, error, onChange,
}: Props) => (
  <div className="flex flex-col w-full">
    <label className="label" htmlFor={id}>{label}</label>
    <input onChange={onChange} {...register} placeholder={placeholder} className={cn('input', { 'error-input': error })} id={id} type={type} />
    {error && <span className="error-message">{error}</span>}
  </div>
);

export default InputField;
