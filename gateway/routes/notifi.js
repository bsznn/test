// gateway/routes/notifi.js
const express = require('express');
const proxy = require('express-http-proxy');

const router = express.Router();

router.use('/', (req, res, next) => {
  const target = process.env.NOTIFI_SERVICE_URL;

  if (!target) {
    return res.status(500).json({ error: 'NOTIFI_SERVICE_URL not defined' });
  }

  proxy(target, {
    proxyReqPathResolver: (req) => req.originalUrl,
  })(req, res, next);
});

module.exports = router;