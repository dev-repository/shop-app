import { prisma } from '~/server/prisma';
import jwt from 'jsonwebtoken';

import type { Token, User } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET ?? 'DevSecretKey';

export const tokensDuration = {
  access_token: '1h',
  refresh_token: '30d',
} as const;

export function generateToken(payload: TokenPayload) {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      payload,
      JWT_SECRET,
      {
        expiresIn: tokensDuration[payload.type],
      },
      (err, token) => {
        if (err || !token) {
          reject(err);
          return;
        }
        resolve(token);
      },
    );
  });
}
export function validateToken<T>(token: string) {
  return new Promise<DecodedToken<T>>((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded as DecodedToken<T>);
    });
  });
}

export interface AccessTokenPayload {
  type: 'access_token';
  userId: number;
  tokenId: number;
  email: string;
}

export interface RefreshTokenPayload {
  type: 'refresh_token';
  tokenId: number;
  rotationCounter: number;
}

type TokenPayload = AccessTokenPayload | RefreshTokenPayload;

type DecodedToken<T> = {
  iat: number;
  exp: number;
} & T;

async function createTokenItem(userId: number) {
  const token = await prisma.token.create({
    data: {
      userId,
    },
  });
  return token;
}

export async function generateTokens(user: User, tokenItem?: Token) {
  const { id: userId, email } = user;
  const token = tokenItem ?? (await createTokenItem(userId));
  const tokenId = token.id;

  // refactor above code with Promise.all
  const [accessToken, refreshToken] = await Promise.all([
    generateToken({
      type: 'access_token',
      userId,
      tokenId,
      email,
    }),
    generateToken({
      type: 'refresh_token',
      tokenId,
      rotationCounter: token.rotationCounter,
    }),
  ]);

  return {
    refreshToken,
    accessToken,
  };
}
