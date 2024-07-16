import './Spinner.css';

const Spinner = () => {
  return (
    <div className="Spinner">
      <div className="spinner-border text-primary Spinner-circle">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;