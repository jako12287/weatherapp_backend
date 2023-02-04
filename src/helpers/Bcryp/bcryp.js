import { hash, compare } from "bcrypt";

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

export const comparePassword = async (password, hashPassword) => {
  const match = await compare(password, hashPassword);
  return match;
};
