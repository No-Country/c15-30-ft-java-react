const crypto = require('crypto')

export async function hashPassword(password) {
  const usedSalt = process.env.SALT || crypto.randomBytes(4).toString('hex');
  const passwordWithSalt = password + usedSalt;

  const algorithm = 'sha256';
  const hash = crypto.createHash(algorithm);

  hash.update(passwordWithSalt);

  return {
    salt: usedSalt,
    password: hash.digest('hex')
  };
}