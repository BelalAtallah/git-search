import { ChangeEvent } from "react";

interface ISelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}
export const Select = ({ value, onChange, options }: ISelectProps) => {
  const onValueChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.value);

  return (
    <select
      className="bg-transparent ring-0 outline-0 border-0 cursor-pointer text-base"
      value={value}
      onChange={onValueChange}
    >
      {options.map((op, index) => (
        <option key={index} value={op.value}>
          {op.label}
        </option>
      ))}
    </select>
  );
};
