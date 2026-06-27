/**
 * ConfigManager 鍗曞厓娴嬭瘯
 */

import { ConfigManager } from '../../src/lib/config';

// Mock 鐜鍙橀噺
const originalEnv = process.env;

describe('ConfigManager', () => {
  beforeEach(() => {
    // 閲嶇疆鍗曚緥
    (ConfigManager as any).instance = undefined;
    // 閲嶇疆鐜鍙橀噺
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('getInstance', () => {
    it('搴旇繑鍥炲崟渚嬪疄渚?, () => {
      process.env.GITHUB_TOKEN = 'ghp_test_token';
      const instance1 = ConfigManager.getInstance();
      const instance2 = ConfigManager.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe('loadFromEnv', () => {
    it('搴斿湪 GITHUB_TOKEN 鏈缃椂鎶涘嚭閿欒', () => {
      delete process.env.GITHUB_TOKEN;
      expect(() => ConfigManager.getInstance()).toThrow('GITHUB_TOKEN 鐜鍙橀噺鏈缃?);
    });

    it('搴旀纭姞杞?GitHub 閰嶇疆', () => {
      process.env.GITHUB_TOKEN = 'ghp_test_token';
      process.env.GITHUB_DEFAULT_OWNER = 'test-owner';
      process.env.GITHUB_DEFAULT_REPO = 'test-repo';

      const config = ConfigManager.getInstance().get();
      expect(config.github.token).toBe('ghp_test_token');
      expect(config.github.defaultOwner).toBe('test-owner');
      expect(config.github.defaultRepo).toBe('test-repo');
    });

    it('搴旀纭姞杞藉彲閫夌殑鏁版嵁搴撻厤缃?, () => {
      process.env.GITHUB_TOKEN = 'ghp_test_token';
      process.env.DATABASE_URL = 'postgresql://localhost:5432/test';

      const config = ConfigManager.getInstance().get();
      expect(config.database?.url).toBe('postgresql://localhost:5432/test');
    });

    it('搴旀纭缃棩蹇楃骇鍒?, () => {
      process.env.GITHUB_TOKEN = 'ghp_test_token';
      process.env.LOG_LEVEL = 'debug';

      const config = ConfigManager.getInstance().get();
      expect(config.logLevel).toBe('debug');
    });

    it('搴斾娇鐢ㄩ粯璁ゆ棩蹇楃骇鍒?, () => {
      process.env.GITHUB_TOKEN = 'ghp_test_token';
      delete process.env.LOG_LEVEL;

      const config = ConfigManager.getInstance().get();
      expect(config.logLevel).toBe('info');
    });
  });

  describe('getGithubToken', () => {
    it('搴旇繑鍥?GitHub token', () => {
      process.env.GITHUB_TOKEN = 'ghp_test_token';
      const token = ConfigManager.getInstance().getGithubToken();
      expect(token).toBe('ghp_test_token');
    });
  });

  describe('isDatabaseEnabled', () => {
    it('搴斿湪 DATABASE_URL 璁剧疆鏃惰繑鍥?true', () => {
      process.env.GITHUB_TOKEN = 'ghp_test_token';
      process.env.DATABASE_URL = 'postgresql://localhost:5432/test';
      expect(ConfigManager.getInstance().isDatabaseEnabled()).toBe(true);
    });

    it('搴斿湪 DATABASE_URL 鏈缃椂杩斿洖 false', () => {
      process.env.GITHUB_TOKEN = 'ghp_test_token';
      delete process.env.DATABASE_URL;
      expect(ConfigManager.getInstance().isDatabaseEnabled()).toBe(false);
    });
  });
});
