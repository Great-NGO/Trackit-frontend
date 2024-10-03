
const Loader = ({ size="50px" }) => {
  const loaderStyle = {
    width: size,
    height: size,
    border: `4px solid rgba(0, 0, 0, 0.1)`,
    borderTop: `4px solid #3498db`,
    borderRadius: `50%`,
    animation: `spin 1s linear infinite`,
  };

  return (
    <div className="loader-container">
      <div className="loader" style={loaderStyle}></div>
    </div>
  );
}

export default Loader;
