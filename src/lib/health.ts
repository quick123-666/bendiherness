/**
 * 鍋ュ悍妫€鏌ュ櫒
 * 妫€鏌ョ郴缁熺姸鎬? */

import { ConfigManager } from './config';
import { Logger } from './logger';

export interface HealthStatus {
  healthy: boolean;
  checks: {
    github: boolean;
    database: boolean;
    config: boolean;
  };
  timestamp: string;
}

export class HealthChecker {
  private config: ConfigManager;
  private logger: Logger;

  constructor() {
    this.config = ConfigManager.getInstance();
    this.logger = new Logger('info');
  }

  async check(): Promise<HealthStatus> {
    const checks = {
      github: await this.checkGithub(),
      database: this.checkDatabase(),
      config: this.checkConfig()
    };

    const healthy = Object.values(checks).every(v => v);

    return {
      healthy,
      checks,
      timestamp: new Date().toISOString()
    };
  }

  private async checkGithub(): Promise<boolean> {
    try {
      const token = this.config.getGithubToken();
      if (!token) {
        this.logger.warn('GitHub token 鏈厤缃?);
        return false;
      }

      // 绠€鍗曢獙璇?token 鏍煎紡锛坓hp_ 鎴?github_pat_锛?      const isValid = token.startsWith('ghp_') || token.startsWith('github_pat_');
      if (!isValid) {
        this.logger.warn('GitHub token 鏍煎紡鏃犳晥');
        return false;
      }

      return true;
    } catch (error) {
      this.logger.error('GitHub 妫€鏌ュけ璐?, error as Error);
      return false;
    }
  }

  private checkDatabase(): boolean {
    const enabled = this.config.isDatabaseEnabled();
    if (!enabled) {
      this.logger.debug('鏁版嵁搴撴湭鍚敤');
      return true; // 鏁版嵁搴撴槸鍙€夌殑
    }

    const url = this.config.getDatabaseUrl();
    if (!url) {
      this.logger.warn('鏁版嵁搴撳凡鍚敤浣?URL 鏈厤缃?);
      return false;
    }

    return true;
  }

  private checkConfig(): boolean {
    try {
      this.config.get();
      return true;
    } catch (error) {
      this.logger.error('閰嶇疆妫€鏌ュけ璐?, error as Error);
      return false;
    }
  }
}
