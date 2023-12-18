import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import {
  GoogleAuthProvider,
  app,
  getAuth,
  signInWithPopup,
} from 'config/firebase';
import Cookies, { set } from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useSession } from '../useSession';

export const useGoogleLogin = () => {
  const router = useRouter();
  const { setSession } = useSession();

  const authWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user?.getIdToken();

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.data.error);
    }
  };

  const { mutate: googleLogin, isLoading } = useMutation({
    mutationFn: authWithGoogle,
    onSuccess: (result) => {
      const { data } = result;
      console.log(data, result);
      setSession(data.token, data, data.user_id);
      router.push('/');
    },
  });

  return {
    googleLogin,
    isLoading,
  };
};
