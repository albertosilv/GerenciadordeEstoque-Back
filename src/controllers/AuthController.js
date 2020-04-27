const axios = require('axios').default;

module.exports = {
  login(req, res) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({ error: 'Token not provided' });
    }

    axios
      .get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`)
      .then(() => res.status(200).json({ token }))
      .catch(() => res.status(401).json({ error: 'Token provided is not valid' }));
  },
};
