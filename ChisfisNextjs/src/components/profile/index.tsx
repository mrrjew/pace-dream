"use client";
import Input from "@/shared/Input";
import Label from "../Label";
import Select from "@/shared/Select";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useProfile } from "@/context";

interface UserValues {
  first_name: string;
  last_name: string;
  mobile: string;
  gender: string;
  username: string;
  email: string;
  dob: string;
  about: string;
}

const initialValues: UserValues = {
  first_name: "",
  last_name: "",
  mobile: "",
  gender: "",
  username: "",
  email: "",
  dob: "",
  about: "",
};

const validationSchema = Yup.object({
  first_name: Yup.string().required("Firstname is required"),
  last_name: Yup.string().required("Lastname is required"),
  gender: Yup.string().required("Select Gender"),
  email: Yup.string().required("Email is required").email("Invalid email format"),
  dob: Yup.string()
    .required("Date of birth is required")
    .test("notFutureDate", "Date of birth should be in the past", function (value) {
      const today = new Date();
      const selectedDate = new Date(value);
      return selectedDate < today;
    }),
  mobile: Yup.number().required("Phone number is required"),
  about: Yup.string().required("About you is required"),
});

const ProfileForm = () => {
  const { user, updateProfile }: any = useProfile();
  const onSubmit = (values: any) => {
    const fromData = new FormData();
    fromData.append("first_name", values.first_name);
    fromData.append("last_name", values.last_name);
    fromData.append("mobile", values.mobile);
    fromData.append("gender", values.gender);
    fromData.append("email", values.email);
    fromData.append("dob", values.dob);
    fromData.append("about", values.about);
    updateProfile(fromData);
  };

  const { errors, touched, values, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  useEffect(() => {
    if (user) {
      setFieldValue("first_name", user?.first_name);
      setFieldValue("last_name", user?.last_name);
      setFieldValue("gender", user?.gender);
      setFieldValue("email", user?.email);
      setFieldValue("mobile", user?.mobile);
      setFieldValue("about", user?.about);
      setFieldValue("dob", user?.dob);
    }
  }, [user]);

  return (
    <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
      <form onSubmit={handleSubmit}>
        <div>
          <Label>Firstname </Label>
          <Input
            className="mt-1.5"
            value={values.first_name}
            name="first_name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.first_name && errors.first_name ? (
            <p className="py-3 pt-1 text-red-600 text-sm ">{errors.first_name}</p>
          ) : null}
        </div>
        <div>
          <Label>Lastname </Label>
          <Input
            className="mt-1.5"
            value={values.last_name}
            name="last_name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.last_name && errors.last_name ? (
            <p className="py-3 pt-1 text-red-600 text-sm ">{errors.last_name}</p>
          ) : null}
        </div>

        <div>
          <Label>Gender</Label>
          <Select className="mt-1.5" value={values.gender} name="gender" onChange={handleChange} onBlur={handleBlur}>
            <option value={""}>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
          {touched.gender && errors.gender ? <p className="py-3 pt-1 text-red-600 text-sm ">{errors.gender}</p> : null}
        </div>

        <div>
          <Label>Email</Label>
          <Input className="mt-1.5" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} />
          {touched.email && errors.email ? <p className="py-3 pt-1 text-red-600 text-sm">{errors.email}</p> : null}
        </div>

        <div >
          <Label>Date of birth</Label>
          <Input
            className="mt-1.5"
            type="date" 
            value={values?.dob?.split("T")[0]}
            name="dob"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.dob && errors.dob ? <p className="py-3 pt-1 text-red-600 text-sm">{errors.dob}</p> : null}
        </div>

        <div>
          <Label>Phone number</Label>
          <Input
            className="mt-1.5"
            // defaultValue="003 888 232"
            value={values.mobile}
            name="mobile"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.mobile && errors.mobile ? <p className="py-3 pt-1 text-red-600 text-sm">{errors.mobile}</p> : null}
        </div>

        <div>
          <Label>About you</Label>
          <Textarea className="mt-1.5" value={values.about} name="about" onChange={handleChange} onBlur={handleBlur} />
          {touched.about && errors.about ? <p className="py-3 pt-1 text-red-600 text-sm">{errors.about}</p> : null}
        </div>
        <div className="pt-2">
          <ButtonPrimary type="submit">Update info</ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
