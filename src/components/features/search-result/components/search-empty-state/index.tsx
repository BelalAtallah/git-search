import "./search-empty-state.css";

export const SearchEmptyState = () => {
  return (
    <div className="text-white flex justify-center items-center h-[calc(100vh-220px)] text-2xl flex-col gap-8">
      <p>So... what you waiting for?</p>
      <div className="hand" data-testid="hand">
        <div className="hand__finger hand__finger--first"></div>
        <div className="hand__finger hand__finger--second"></div>
        <div className="hand__finger hand__finger--third"></div>
        <div className="hand__finger hand__finger--fourth"></div>
        <div className="hand__palm"></div>
        <div className="hand__thumb"></div>
      </div>
    </div>
  );
};
