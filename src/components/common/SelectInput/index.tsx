import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    id: string;
    label: string;
    error?: string;
    placeholder: string;
    optionValues: Array<OptionObject>;
    register: UseFormRegisterReturn;
}
interface OptionObject {
    id: number;
    value: string;
    text: string;
}
function SelectInput({
  label, id, placeholder, optionValues, register, error,
}: Props) {
  return (
    <div className="flex flex-col">
      <label className="label" htmlFor={id}>{label}</label>
      <select {...register} className={`uppercase appearance-none input ${error ? 'error-input' : ''}`} id={id}>
        <option disabled selected value="">{placeholder}</option>
        {optionValues?.map((option) => (
          <option key={option.id} value={option.value}>{option.text}</option>
        ))}
      </select>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default SelectInput;
