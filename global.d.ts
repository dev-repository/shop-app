export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      DEPLOY_GROUP: 'development' | 'production' | 'local';
      NEXTAUTH_SECRET: string;
      NEXT_PUBLIC_SITE_URL: string;
      NEXT_PUBLIC_API_HOST: string;
    }
  }
}
