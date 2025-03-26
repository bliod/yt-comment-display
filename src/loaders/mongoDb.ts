import { MongoClient } from 'mongodb';
import config from '../config';

const client = new MongoClient(config.databaseURL, {
  directConnection: true,
});

export default async function connect() {
  try {
    await client.connect();
  } catch (err) {
    console.error('Failed to connect to the database', err);
    process.exit(1);
  }
}

export const db = client.db();
