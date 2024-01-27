import { ChangeEvent } from "react";
import "./search-field.css";

interface ISearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}
export const SearchField = ({ value, onChange }: ISearchFieldProps) => {
  
  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

  return (
    <div className="search-field bg-slate-800">
      <button>
        <svg
          width="20"
          height="15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.633"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <input
        className="input"
        placeholder="Search By..."
        required
        value={value}
        onChange={onSearchInputChange}
        type="text"
      />
      <button className="reset" aria-label="reset" type="reset" onClick={()=> onChange('')}>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};
