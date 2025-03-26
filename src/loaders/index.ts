import expressLoader from './express';
import mongoConnection from './mongoDb';

export default async ({ expressApp }) => {
  await mongoConnection();
  console.info('✌️ DB loaded and connected!');
  await expressLoader({ app: expressApp });
  console.info('🚀 Express Initialized!');
};
