import { jwtVerify } from 'jose';

export async function verifyRefreshToken(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET);
    const { payload } = await jwtVerify(token, secret);

    return payload;
  } catch {
    return null;
  }
}
