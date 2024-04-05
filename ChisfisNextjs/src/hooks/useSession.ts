import Cookies from 'js-cookie';

export const useSession = () => {
  const setSession = (token: string, userInfo: any, userId: string) => {
    Cookies.set('auth-token', token);
    Cookies.set('user_id', userId);
    Cookies.set('user_info', JSON.stringify(userInfo));
  };

  const getSession = () => {
    const token = Cookies.get('auth-token');
    const userInfo = JSON.parse(
      Cookies.get('user_info') ? Cookies.get('user_info')! : '{}'
    );
    const userId = Cookies.get('user_id');
    return {
      token,
      userInfo,
      userId,
    };
  };

  const clearSession = () => {
    Cookies.remove('auth-token');
    Cookies.remove('user_id');
    Cookies.remove('user_info');
  };

  return {
    setSession,
    getSession,
    clearSession,
  };
};
