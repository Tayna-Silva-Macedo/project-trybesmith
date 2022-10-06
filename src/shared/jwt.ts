import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Payload } from '../interfaces';

dotenv.config();

const { JWT_SECRET } = process.env;
const JWT_OPTIONS: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const create = (payload: Payload): string => {
  const token = jwt.sign(payload, JWT_SECRET as string, JWT_OPTIONS);
  return token;
};

const validate = (token: string): JwtPayload => {
  const payload = jwt.verify(token, JWT_SECRET as string);
  return payload as JwtPayload;
};

export default { create, validate };
