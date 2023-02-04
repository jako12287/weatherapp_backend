import { hash, compare } from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  } catch (error) {
    return "something went wrong";
  }
};

export const comparePassword = async (password, hashPassword) => {
  // try {
    const match = await compare(password, hashPassword);
    return match;
  // } catch (error) {
    // return "something went wrong";
  // }
};
