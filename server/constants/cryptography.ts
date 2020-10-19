export default {
  RSA_PRIVATE_KEY: process.env.RSA_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
};
