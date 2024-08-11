import env from 'env-var';

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  HOST: env.get('HOST').asString(),
  USER: env.get('USER').asString(),
  PASSWORD: env.get('PASSWORD').asString(),
  DATABASE: env.get('DATABASE').asString(),
  PORT_DB: env.get('PORT_DB').asPortNumber()
};
