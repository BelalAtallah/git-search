import "./loader.css";
export const Loader = () => {
  return (
    <div>
      <div className="spinner">
        <div data-testid="spinner" className="spinner1"></div>
      </div>
      <p className="text-white text-center mt-5">Loading...</p>
    </div>
  );
};
