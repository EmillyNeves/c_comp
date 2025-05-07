import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../shared/schema.js';

// Create a database connection using Neon's serverless driver
let db;
try {
  const sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql, { schema });
} catch (error) {
  console.error('Failed to connect to database:', error);
  throw new Error('Database connection failed');
}
export { db };