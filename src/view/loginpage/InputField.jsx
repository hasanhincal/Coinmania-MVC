import React from "react";

const InputField = ({ data, formik }) => {
  const { label, name, type } = data;

  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        onChange={formik.handleChange}
        className={formik.touched[name] && formik.errors[name] && "error"}
      />
      {/* formda odak(handleblur kullanıldı) varsa veya hata kaybedıldiğinde
     hata varsa verir; */}
      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default InputField;
