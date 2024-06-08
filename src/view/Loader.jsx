import React from "react";

const Loader = () => {
  return (
    <div className="d-flex flex-column gap-5 align-items-center justify-content-center mt-5 ">
      <div className="spinner-grow " role="status"></div>
      Yükleniyor...
    </div>
  );
};

export default Loader;
