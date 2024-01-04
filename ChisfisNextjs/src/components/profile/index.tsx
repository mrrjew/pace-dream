'use client';
import Input from '@/shared/Input';
import Label from '../Label';
import Select from '@/shared/Select';
import Textarea from '@/shared/Textarea';
import ButtonPrimary from '@/shared/ButtonPrimary';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useProfile } from '@/context';
import NcModal from '@/shared/NcModal';
import axios from 'axios';
import { Loader } from '@/shared/Loader';

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
  first_name: '',
  last_name: '',
  mobile: '',
  gender: '',
  username: '',
  email: '',
  dob: '',
  about: '',
};

const validationSchema = Yup.object({
  first_name: Yup.string().required('Firstname is required'),
  last_name: Yup.string().required('Lastname is required'),
  gender: Yup.string().required('Select Gender'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  dob: Yup.string()
    .required('Date of birth is required')
    .test(
      'notFutureDate',
      'Date of birth should be in the past',
      function (value) {
        const today = new Date();
        const selectedDate = new Date(value);
        return selectedDate < today;
      }
    ),
  mobile: Yup.number().required('Phone number is required'),
  about: Yup.string().required('About you is required'),
});

const ProfileForm = () => {
  const { user, updateProfile, getUser }: any = useProfile();
  console.log('user', user);
  const onSubmit = (values: any) => {
    const fromData = new FormData();
    fromData.append('first_name', values.first_name);
    fromData.append('last_name', values.last_name);
    fromData.append('mobile', values.mobile);
    fromData.append('gender', values.gender);
    fromData.append('email', values.email);
    fromData.append('dob', values.dob);
    fromData.append('about', values.about);
    updateProfile(fromData);
  };

  const {
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  useEffect(() => {
    if (user) {
      setFieldValue('first_name', user?.first_name);
      setFieldValue('last_name', user?.last_name);
      setFieldValue('gender', user?.gender);
      setFieldValue('email', user?.email);
      setFieldValue('mobile', user?.mobile);
      setFieldValue('about', user?.about);
      setFieldValue('dob', user?.dob);
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
            <p className="py-3 pt-1 text-red-600 text-sm ">
              {errors.first_name}
            </p>
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
            <p className="py-3 pt-1 text-red-600 text-sm ">
              {errors.last_name}
            </p>
          ) : null}
        </div>

        <div>
          <Label>Gender</Label>
          <Select
            className="mt-1.5"
            value={values.gender}
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value={''}>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
          {touched.gender && errors.gender ? (
            <p className="py-3 pt-1 text-red-600 text-sm ">{errors.gender}</p>
          ) : null}
        </div>

        <div>
          <Label>Email</Label>
          <Input
            className="mt-1.5"
            value={values.email}
            name="email"
            readOnly
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <p className="py-3 pt-1 text-red-600 text-sm">{errors.email}</p>
          ) : null}
        </div>
        {user?.emailVerified ? null : (
          <NcModal
            renderContent={() => <VerifyEmailModal email={values.email} />}
            renderTrigger={(openModal) => (
              <span
                className="block underline text-sm mt-1 cursor-pointer text-red-400 text-right"
                onClick={() => openModal()}
              >
                Verify Email
              </span>
            )}
            modalTitle="Verify Email"
            onCloseModal={() => getUser()}
          />
        )}

        <div>
          <Label>Date of birth</Label>
          <Input
            className="mt-1.5"
            type="date"
            value={values?.dob?.split('T')[0]}
            name="dob"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.dob && errors.dob ? (
            <p className="py-3 pt-1 text-red-600 text-sm">{errors.dob}</p>
          ) : null}
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
          {touched.mobile && errors.mobile ? (
            <p className="py-3 pt-1 text-red-600 text-sm">{errors.mobile}</p>
          ) : null}
        </div>

        <div>
          <Label>About you</Label>
          <Textarea
            className="mt-1.5"
            value={values.about}
            name="about"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.about && errors.about ? (
            <p className="py-3 pt-1 text-red-600 text-sm">{errors.about}</p>
          ) : null}
        </div>
        <div className="pt-2">
          <ButtonPrimary type="submit">Update info</ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;

const VerifyEmailModal = ({ email }: { email: string }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ type: string; message: string } | null>(
    null
  );
  const [success, setSuccess] = useState<{
    type: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    sendVerificationCode();
  }, []);

  const sendVerificationCode = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/send-email-code`,
        { email: email }
      );
      setSuccess({
        type: 'code sent',
        message: 'A verification code is sent to your email',
      });
      setError(null);
    } catch (err) {
      console.log(err);
      setError({
        type: 'code not sent',
        message: 'Could not send verification code. Please try again',
      });
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email-code`,
        { email: email, code: code }
      );
      setSuccess({
        type: 'code verified',
        message: 'Your email is verified',
      });
      setError(null);
    } catch (err) {
      console.log(err);
      setError({
        type: 'code not verified',
        message: 'Invalid code. Please try again',
      });
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  const FailureComponent = () => {
    return (
      <div>
        <h2>{error?.message}</h2>
        {error?.type === 'code not sent' ? (
          <h3>
            Please{' '}
            <span onClick={sendVerificationCode} className="underline">
              try again
            </span>
          </h3>
        ) : (
          <h3>Please try again</h3>
        )}
      </div>
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      {error !== null ? (
        <FailureComponent />
      ) : (
        <div className="flex justify-center">
          {success?.type === 'code sent' ? (
            <form onSubmit={verifyCode} className="max-w-md ">
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Verification Code
                </span>
                <Input
                  type="number"
                  placeholder="123456"
                  className="mt-1"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </label>
              <div className="pt-2">
                <ButtonPrimary type="submit">Submit</ButtonPrimary>
              </div>
            </form>
          ) : (
            <h2 className="text-3xl font-semibold">Email Verified</h2>
          )}
        </div>
      )}
    </div>
  );
};
