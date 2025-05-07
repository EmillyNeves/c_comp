
const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  isDev: process.env.NODE_ENV === 'development'
};

export default config;
