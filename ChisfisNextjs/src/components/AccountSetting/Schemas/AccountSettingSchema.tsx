import * as Yup from "yup";

export const PersonalInformationSchema = Yup.object({
  firstname: Yup.string().min(2).max(14).required("Firstname is required"),
  lastname: Yup.string().min(2).max(14).required("Lastname is required"),
  email: Yup.string().email().required("Email is required"),
  phonenumber: Yup.string()
    .min(10)
    .max(11)
    .required("Phone number is required"),
  dateofbirth: Yup.string().required("Date of birth is required"),
  towncity: Yup.string().required("Town/City is required"),
  zipcode: Yup.string().required("Zipcode is required"),
  bio: Yup.string().required("Bio is required"),
  // gender: Yup.string().required("Gender is required"),
  countryregion: Yup.string().required("Country/Region is required"),
  city: Yup.string().required("City is required"),
  streetaddress: Yup.string().required("Street address is required"),
  state: Yup.string().required("State is required"),
});

export const LoginSecutirySchema = Yup.object({
  current_password: Yup.string().required("Current password is required"),
  new_password: Yup.string().min(6).required("New password is required"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("new_password")], "Password must match"),
});

export const PaymentPayoutsSchema = Yup.object({
  firstname: Yup.string().min(2).max(14).required("Firstname is required"),
  card_number: Yup.string().min(16).max(16).required("Card number is required"),
  expiry_dare: Yup.string().required("Expiry date is required"),
  cvv: Yup.string().min(3).max(3).required("CVV is required"),
});
