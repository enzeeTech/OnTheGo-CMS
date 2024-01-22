module.exports = ({ env }) => ({
  auth: {
    secret: 'ebbde954212dde7e7876fb5152e0496905221145bb0580e762f41c73df2f1b97',
  },
  apiToken: {
    salt: '7f3febf6c670e48a37df40769983cb48b2e334f02707b333566cf63e7ca39a75',
  },
  transfer: {
    token: {
      salt: 'dc3296fd373ec0780ae08092546bfec533c96faebb537a9441ae804cc4862e1a',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
