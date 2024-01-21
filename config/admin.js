module.exports = ({ env }) => ({
  auth: {
    secret: 'AR8b2OFqxt6/GE2SUaFwlg',
  },
  apiToken: {
    salt: 'ZLvMxKlEVp6bw4IG/sU7ZA',
  },
  transfer: {
    token: {
      salt: '4py0aZzXw89XfPfT5gHRjQ',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
