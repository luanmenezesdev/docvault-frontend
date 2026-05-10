import { z } from 'zod';

const envSchema = z.object({
  VITE_API_BASE_URL: z.url(),
  MODE: z.enum(['development', 'test', 'production', 'staging']).default('development'),
});

export const env = envSchema.parse(import.meta.env);
