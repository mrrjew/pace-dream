export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic?: string;
}

export const DbResponseToUser = (user: any): User => {
  return {
    id: user._id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    profilePic: user.profilePic,
  };
};
