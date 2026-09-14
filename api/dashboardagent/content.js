const fs = require('fs');
const path = require('path');
const { verifyToken, getBearerToken } = require('../_lib/crypto');

const CONTENT_PATH = path.join(process.cwd(), 'server-content', 'dashboardagent', 'case-study.json');

module.exports = (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secret = process.env.DASHBOARDAGENT_TOKEN_SECRET;
  const token = getBearerToken(req);

  if (!secret || !verifyToken(token, secret)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  let content;
  try {
    content = JSON.parse(fs.readFileSync(CONTENT_PATH, 'utf8'));
  } catch {
    return res.status(500).json({ error: 'Content unavailable' });
  }

  res.setHeader('Cache-Control', 'private, no-store');
  return res.status(200).json(content);
};
