const { safeCompare, signToken } = require('../_lib/crypto');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const password = req.body && req.body.password;
  const expected = process.env.AIREADINESS_PASSWORD;
  const secret = process.env.AIREADINESS_TOKEN_SECRET;

  if (!expected || !secret) {
    return res.status(500).json({ error: 'Server not configured' });
  }

  res.setHeader('Cache-Control', 'no-store');

  if (!safeCompare(password, expected)) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  return res.status(200).json({ token: signToken(secret) });
};
