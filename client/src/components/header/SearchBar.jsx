import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ className }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className={`flex-grow px-10 flex ${className}`}>
      <input
        className="h-10 px-4 rounded-sm w-full border border-border focus:border-border-focus outline-none"
        type="text"
        placeholder="Tìm việc làm"
      />
      <button className="flex items-center justify-center px-4 bg-dark text-dark-content rounded-r-sm">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
