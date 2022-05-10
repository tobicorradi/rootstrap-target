interface Props {
    label: string;
    id: string;
    placeholder: string;
    optionValues: Array<OptionObject>;
}
interface OptionObject {
    id: number;
    value: string;
    text: string;
}
function SelectInput({
  label, id, placeholder, optionValues,
}: Props) {
  return (
    <div className="flex flex-col">
      <label className="label" htmlFor={id}>{label}</label>
      <select className="appearance-none input" id={id}>
        <option disabled selected hidden>{placeholder}</option>
        {optionValues?.map((option) => (
          <option key={option.id} value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
