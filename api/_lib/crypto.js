const crypto = require('crypto');

const TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour
const TOKEN_PURPOSE = 'aireadiness';
const SAFE_FILENAME = /^[a-zA-Z0-9_-]+\.(png|gif|jpe?g|svg)$/;

// Hash both sides to equal-length digests before timingSafeEqual so the
// comparison never throws on length mismatch and never leaks timing based
// on the submitted password's length or content.
function safeCompare(supplied, expected) {
  if (typeof supplied !== 'string' || typeof expected !== 'string') return false;
  const a = crypto.createHash('sha256').update(supplied).digest();
  const b = crypto.createHash('sha256').update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

function signToken(secret) {
  const payload = { p: TOKEN_PURPOSE, exp: Date.now() + TOKEN_TTL_MS };
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(payloadB64).digest('base64url');
  return `${payloadB64}.${sig}`;
}

function verifyToken(token, secret) {
  if (typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payloadB64, sig] = parts;
  if (!payloadB64 || !sig) return false;

  const expectedSig = crypto.createHmac('sha256', secret).update(payloadB64).digest();
  let providedSig;
  try {
    providedSig = Buffer.from(sig, 'base64url');
  } catch {
    return false;
  }
  if (expectedSig.length !== providedSig.length) return false;
  if (!crypto.timingSafeEqual(expectedSig, providedSig)) return false;

  let payload;
  try {
    payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
  } catch {
    return false;
  }
  return (
    payload &&
    payload.p === TOKEN_PURPOSE &&
    typeof payload.exp === 'number' &&
    Date.now() <= payload.exp
  );
}

function isSafeFilename(name) {
  return typeof name === 'string' && SAFE_FILENAME.test(name);
}

function getBearerToken(req) {
  const header = req.headers['authorization'] || '';
  const match = /^Bearer (.+)$/.exec(header);
  return match ? match[1] : null;
}

module.exports = { safeCompare, signToken, verifyToken, isSafeFilename, getBearerToken };
