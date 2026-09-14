const fs = require('fs');
const path = require('path');
const { verifyToken, isSafeFilename } = require('../_lib/crypto');

const IMAGES_DIR = path.join(process.cwd(), 'server-content', 'dashboardagent', 'images');

const CONTENT_TYPES = {
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

module.exports = (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secret = process.env.DASHBOARDAGENT_TOKEN_SECRET;
  const { file, token } = req.query;

  if (!secret || !verifyToken(token, secret)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!isSafeFilename(file)) {
    return res.status(400).json({ error: 'Invalid filename' });
  }

  const filePath = path.join(IMAGES_DIR, file);

  let data;
  try {
    data = fs.readFileSync(filePath);
  } catch {
    return res.status(404).json({ error: 'Not found' });
  }

  const ext = path.extname(file).toLowerCase();
  res.setHeader('Content-Type', CONTENT_TYPES[ext] || 'application/octet-stream');
  res.setHeader('Cache-Control', 'private, max-age=300');
  return res.status(200).send(data);
};
