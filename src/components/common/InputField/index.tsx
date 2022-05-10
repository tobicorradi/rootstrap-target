interface Props {
    label: string;
    type: string;
    id: string;
    placeholder?: string;
}
function InputField({
  label, type = 'text', id, placeholder,
}: Props) {
  return (
    <div className="flex flex-col">
      <label className="label" htmlFor={id}>{label}</label>
      <input placeholder={placeholder} className="input" id={id} type={type} />
    </div>
  );
}

export default InputField;
