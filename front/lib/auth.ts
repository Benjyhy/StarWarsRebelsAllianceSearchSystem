import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "./db";

const SECRET = process.env.JWT_SECRET || "default_secret";

export const authenticateUser = async (username: string, password: string) => {
  const user = users[username.toLowerCase()];
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  // Generate JWT Token
  const token = jwt.sign({ id: user.id, name: user.name }, SECRET, {
    expiresIn: "1h",
  });
  return { token, user: { id: user.id, name: user.name } };
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
};
