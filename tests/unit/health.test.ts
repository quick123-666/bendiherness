/**
 * HealthChecker 鍗曞厓娴嬭瘯
 */

import { HealthChecker } from '../../src/lib/health';

// Mock ConfigManager
jest.mock('../../src/lib/config', () => ({
  ConfigManager: {
    getInstance: jest.fn()
  }
}));

// Mock Logger
jest.mock('../../src/lib/logger', () => ({
  Logger: jest.fn().mockImplementation(() => ({
    warn: jest.fn(),
    debug: jest.fn(),
    error: jest.fn()
  }))
}));

import { ConfigManager } from '../../src/lib/config';

const mockConfigManager = ConfigManager.getInstance as jest.Mock;

describe('HealthChecker', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('check', () => {
    it('搴斿湪鎵€鏈夋鏌ラ€氳繃鏃惰繑鍥?healthy=true', async () => {
      mockConfigManager.mockReturnValue({
        getGithubToken: () => 'ghp_valid_token',
        isDatabaseEnabled: () => false,
        getDatabaseUrl: () => undefined,
        get: () => ({
          github: { token: 'ghp_valid_token', defaultOwner: '', defaultRepo: '' },
          logLevel: 'info'
        })
      });

      const healthChecker = new HealthChecker();
      const result = await healthChecker.check();
      expect(result.healthy).toBe(true);
      expect(result.checks.config).toBe(true);
    });

    it('搴斿湪 GitHub token 鏃犳晥鏃惰繑鍥?healthy=false', async () => {
      mockConfigManager.mockReturnValue({
        getGithubToken: () => 'invalid_token',
        isDatabaseEnabled: () => false,
        getDatabaseUrl: () => undefined,
        get: () => ({
          github: { token: 'invalid_token', defaultOwner: '', defaultRepo: '' },
          logLevel: 'info'
        })
      });

      const healthChecker = new HealthChecker();
      const result = await healthChecker.check();
      expect(result.checks.github).toBe(false);
    });

    it('搴旀帴鍙?github_pat_ 鏍煎紡鐨?token', async () => {
      mockConfigManager.mockReturnValue({
        getGithubToken: () => 'github_pat_11ABCDEFG_test',
        isDatabaseEnabled: () => false,
        getDatabaseUrl: () => undefined,
        get: () => ({
          github: { token: 'github_pat_11ABCDEFG_test', defaultOwner: '', defaultRepo: '' },
          logLevel: 'info'
        })
      });

      const healthChecker = new HealthChecker();
      const result = await healthChecker.check();
      expect(result.checks.github).toBe(true);
    });

    it('搴斿湪鏁版嵁搴撳惎鐢ㄤ絾 URL 涓虹┖鏃惰繑鍥?false', async () => {
      mockConfigManager.mockReturnValue({
        getGithubToken: () => 'ghp_valid_token',
        isDatabaseEnabled: () => true,
        getDatabaseUrl: () => undefined,
        get: () => ({
          github: { token: 'ghp_valid_token', defaultOwner: '', defaultRepo: '' },
          database: undefined,
          logLevel: 'info'
        })
      });

      const healthChecker = new HealthChecker();
      const result = await healthChecker.check();
      expect(result.checks.database).toBe(false);
    });
  });

  describe('timestamp', () => {
    it('搴斿寘鍚?ISO 鏍煎紡鏃堕棿鎴?, async () => {
      mockConfigManager.mockReturnValue({
        getGithubToken: () => 'ghp_valid_token',
        isDatabaseEnabled: () => false,
        getDatabaseUrl: () => undefined,
        get: () => ({ github: { token: 'ghp_valid_token', defaultOwner: '', defaultRepo: '' }, logLevel: 'info' })
      });

      const healthChecker = new HealthChecker();
      const result = await healthChecker.check();
      expect(result.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });
  });
});
