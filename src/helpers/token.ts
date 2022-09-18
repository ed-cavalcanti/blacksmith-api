import jwt from 'jsonwebtoken';

const secret = 'senhasupersecreta';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export default function createToken(id: number, username: string): string {
  const token = jwt.sign({ data: { userId: id, username } }, secret, jwtConfig);
  return token;
}