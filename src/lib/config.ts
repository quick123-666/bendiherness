/**
 * 閰嶇疆绠＄悊鍣? * 浠庣幆澧冨彉閲忚鍙栭厤缃紝涓嶅啓鍏ユ枃浠? */

export interface Config {
  github: {
    token: string;
    defaultOwner: string;
    defaultRepo: string;
  };
  database?: {
    url: string;
  };
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export class ConfigManager {
  private static instance: ConfigManager;
  private config: Config;

  private constructor() {
    this.config = this.loadFromEnv();
  }

  static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  private loadFromEnv(): Config {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('GITHUB_TOKEN 鐜鍙橀噺鏈缃?);
    }

    return {
      github: {
        token,
        defaultOwner: process.env.GITHUB_DEFAULT_OWNER || '',
        defaultRepo: process.env.GITHUB_DEFAULT_REPO || ''
      },
      database: process.env.DATABASE_URL ? {
        url: process.env.DATABASE_URL
      } : undefined,
      logLevel: (process.env.LOG_LEVEL as Config['logLevel']) || 'info'
    };
  }

  get(): Config {
    return { ...this.config };
  }

  getGithubToken(): string {
    return this.config.github.token;
  }

  getDatabaseUrl(): string | undefined {
    return this.config.database?.url;
  }

  isDatabaseEnabled(): boolean {
    return !!this.config.database;
  }
}
