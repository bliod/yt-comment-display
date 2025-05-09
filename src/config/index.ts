import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: process.env.PORT || 8080,
  databaseURL: process.env.MONGODB_URI,
  youtubeApi: process.env.YOUTUBE_API,
  api: {
    prefix: '/api',
  },
};
