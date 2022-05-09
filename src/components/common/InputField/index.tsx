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
      <label className="mb-1 font-semibold tracking-[3px] uppercase text-sm" htmlFor={id}>{label}</label>
      <input placeholder={placeholder} className="p-3 text-sm text-center uppercase border border-target-black" id={id} type={type} />
    </div>
  );
}

export default InputField;
