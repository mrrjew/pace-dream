import { useSession } from '@/hooks/useSession';
import ButtonPrimary from '@/shared/ButtonPrimary';
import Input from '@/shared/Input';
import axios from 'axios';
import { app } from 'config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import router from 'next/router';
import { useState } from 'react';

const PasswordMatchText = (props: {
  password: string;
  confirmPassword: string;
}) => {
  const { password, confirmPassword } = props;

  if (password === '' || confirmPassword === '') {
    return <span></span>;
  }

  if (password !== confirmPassword) {
    return <span className="text-red-500">Passwords do not match</span>;
  }
  return <span className="text-green-500">Passwords match</span>;
};

interface IUserDetails {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  dob: Date;
}

export const SignupForm: React.FC<{ email: string }> = (props: {
  email: string;
}) => {
  const [userDetails, setUserDetails] = useState<IUserDetails>({
    email: props.email,
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dob: new Date(),
  });

  const [loading, setLoading] = useState(false);

  const { setSession } = useSession();

  const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    const auth = getAuth(app);
    e.preventDefault();
    setLoading(true);

    if (userDetails.password !== userDetails.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (userDetails.password.length < 6) {
      alert('Password must be at least 8 characters');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
        {
          email: userCredential.user.email,
          password: userDetails.password,
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          dob: userDetails.dob,
        }
      );
      const newUser = response.data.data;
      setSession(newUser.token, newUser, newUser.user_id);
      setTimeout(() => {
        router.push('/');
      }, 500);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form
      className="grid grid-cols-1 gap-6"
      action="#"
      method="post"
      onSubmit={createAccount}
    >
      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">
          First Name
        </span>
        <Input
          type="text"
          placeholder="John"
          className="mt-1"
          value={userDetails.firstName}
          onChange={(e) =>
            setUserDetails({ ...userDetails, firstName: e.target.value })
          }
        />
      </label>
      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">
          Last Name
        </span>
        <Input
          type="text"
          placeholder="Smith"
          className="mt-1"
          value={userDetails.lastName}
          onChange={(e) =>
            setUserDetails({ ...userDetails, lastName: e.target.value })
          }
        />
      </label>
      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">
          Date of Birth
        </span>
        <Input
          type="date"
          placeholder="Smith"
          className="mt-1"
          max={new Date().toISOString().split('T')[0]}
          min={new Date(1900, 1, 1).toISOString().split('T')[0]}
          value={
            userDetails.dob
              ? userDetails.dob.toISOString().split('T')[0]
              : undefined
          }
          onChange={(e) => {
            const selectedDate = new Date(e.target.value);
            setUserDetails({ ...userDetails, dob: selectedDate });
          }}
        />
      </label>

      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">
          Email address
        </span>
        <Input
          type="email"
          readOnly
          className="mt-1"
          disabled
          value={userDetails.email}
        />
      </label>
      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Password
        </span>
        <Input
          type="password"
          className="mt-1"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          value={userDetails.password}
        />
      </label>
      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Confirm Password
        </span>
        <Input
          type="password"
          className="mt-1"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              confirmPassword: e.target.value,
            })
          }
          value={userDetails.confirmPassword}
        />
        <PasswordMatchText
          password={userDetails.password}
          confirmPassword={userDetails.confirmPassword}
        />
      </label>
      <ButtonPrimary type="submit" loading={loading}>
        Continue
      </ButtonPrimary>
    </form>
  );
};
