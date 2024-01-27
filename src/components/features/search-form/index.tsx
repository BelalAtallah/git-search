import { SearchField } from "@/components/shared/search-field";
import { Select } from "@/components/shared/select";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchType } from "@/models";
import { setSearchType, setSearchValue } from "@/slices/search-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";

const options = [
  {
    value: "users",
    label: "Developer",
  },
  {
    value: "repositories",
    label: "Repository",
  },
];

export const SearchForm = () => {
  const [value, setValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 500);
      return () => clearTimeout(timer);
    }
  }, [value]);

  const debouncedValue = useDebounce<string>(value, 500);
  const dispatch = useDispatch();

  const searchType = useSelector((state: RootState) => state.search.type);

  const handleSearchTypeChange = (type: SearchType) => {
    dispatch(setSearchType({ type }));
  };

  useEffect(() => {
    dispatch(setSearchValue({ value: debouncedValue }));
  }, [debouncedValue, dispatch]);

  return (
    <div className="items-center relative flex justify-center border p-4 bg-gray-100 text-black rounded-lg">
      <div className={`absolute mix-blend-lighten transition-all duration-500 ${isTyping || value ? '-top-[96px]' : ' -top-12'}`}>
        <Image
          src="/github-avatar.png"
          alt="github avatar"
          className="w-48 h-48 object-cover transition-all group-hover:invert"
          priority
          width={200}
          height={200}
        />
      </div>
      <div className="border-r border-slate-400 pe-2 me-2">
        <SearchField value={value} onChange={setValue} />
      </div>
      <div>
        <Select
          onChange={handleSearchTypeChange as () => void}
          value={searchType}
          options={options}
        />
      </div>
    </div>
  );
};
