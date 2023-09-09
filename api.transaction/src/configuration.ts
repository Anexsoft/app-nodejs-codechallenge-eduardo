import dotenv from 'dotenv';
dotenv.config();

import pkg from '../package.json';

export interface AppConfig {
  APP_NAME: string;
  PORT: number;
  DB_HOST: string;
  DB_NAME: string;
}

export const config: AppConfig = {
  APP_NAME: pkg.name,
  PORT: process.env.PORT as unknown as number,
  DB_HOST: process.env.DB_HOST as string,
  DB_NAME: process.env.DB_NAME as string,
};
