import * as yup from "yup";
// Kaynak: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Şifre için Kurallar:
// 1 büyük 1 küçük harf
// 1 sayı
// 1 özel karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir mail giriniz!")
    .required("**Zorunlu Alan"),
  age: yup
    .number()
    .max(100, "100 Yaşından küçük olmalısınız!")
    .min(18, "18 Yaşından büyük olmalısınız!")
    .required("**Zorunlu Alan")
    .integer("Tam sayı giriniz!"),
  password: yup
    .string()
    .min(5, "Şifre minumum 5 karekterden oluşmalıdır!")
    .matches(regex, "Şifreniz yeterince güçlü değil!")
    .required("**Zorunlu Alan"),
  confirm_password: yup
    .string()
    //*oneOF: elemanın değeri verilen değerle eşleşiyormu kontrol eder
    .oneOf([yup.ref("password")], "**Şifre eşleşmiyor")
    //* ref >> farklı bir input değerini çağirmaya yarar.
    .required("**Zorunlu Alan"),
  terms: yup.boolean().isTrue("Koşulları onaylayınız!"),
});
