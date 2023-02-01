import { RESULT_CODE } from '~/server/errors/code';
import { prisma } from '~/server/prisma/prisma';
import { generateHash, generateSalt, secureCompare } from '~/utils/password';
import type { CreateAuthParams } from './users.params';

export class UsersService {
  /**
   * @description Get user by id
   * @param {number} id - auth table id
   */
  static async getUserById(id: number) {
    return prisma.auth.findUnique({
      where: {
        id,
      },
      select: { email: true, id: true, users: true },
    });
  }

  /**
   * @description email and password to authorize
   * @param {string} email - email
   * @param {string} password - password
   */
  static async authorize(email: string, password: string) {
    const auth = await prisma.auth.findUnique({
      where: {
        email,
      },
    });

    if (!auth) {
      return {
        ok: false,
        data: null,
        error: RESULT_CODE.USER_NOT_FOUND,
      };
    }

    if (secureCompare(auth.password, generateHash(password, auth.salt))) {
      return {
        ok: true,
        data: {
          email: auth.email,
          id: auth.id,
        },
        error: null,
      };
    }

    return {
      ok: false,
      data: null,
      error: RESULT_CODE.INVALID_PASSWORD,
    };
  }

  /**
   * @description Create new user
   * @param {CreateAuthParams} param - email and password
   */
  static async createAuth({ email, password }: CreateAuthParams) {
    const salt = generateSalt();
    const hash = generateHash(password, salt);
    return prisma.auth.create({
      data: {
        email,
        password: hash,
        salt,
      },
    });
  }
}
