import React from "react";
import InputField from "./InputField";
import { useFormik } from "formik";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { schema } from "../../schema";

const LoginPage = () => {
  const navigate = useNavigate();
  //* useFormik: formik özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    //* formda tutulacak değerleri belirleme;
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirm_password: "",
      terms: false,
    },
    //* validasyon kurallarını tanımlama ;
    validationSchema: schema,

    onSubmit: async (values, actions) => {
      // console.log(values);
      // console.log(actions);
      console.log("çallıişti");

      //* API similasyonu;
      await new Promise((resolve) => setTimeout(resolve, 2000));

      //* kullanıcıyı locale gönderme;
      localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));

      //* formu temizler;
      actions.resetForm();

      //* Anasayfaya form submit olunca yönlendir;
      navigate("/home");
    },
  });
  return (
    <div>
      <div className="container-box">
        <div className="logo">
          <img src="/c-logo.png" alt="logo" />
          <h2>Coinmania</h2>
        </div>
        {/* form alanı */}
        <form onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
          {inputs.map((data, key) => (
            <InputField formik={formik} key={key} data={data} />
          ))}
          <button disabled={formik.isSubmitting} type="submit">
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

const inputs = [
  { label: "Email", name: "email", type: "email" },
  { label: "Yaş", name: "age", type: "number" },
  { label: "Şifre", name: "password", type: "password" },
  { label: "Şifre Onay", name: "confirm_password", type: "password" },
  { label: "Koşulları Okudum Onayladım.", name: "terms", type: "checkbox" },
];
