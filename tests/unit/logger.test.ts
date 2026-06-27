/**
 * Logger 鍗曞厓娴嬭瘯
 */

import { Logger } from '../../src/lib/logger';

describe('Logger', () => {
  let consoleSpy: {
    debug: jest.SpyInstance;
    info: jest.SpyInstance;
    warn: jest.SpyInstance;
    error: jest.SpyInstance;
  };

  beforeEach(() => {
    consoleSpy = {
      debug: jest.spyOn(console, 'debug').mockImplementation(),
      info: jest.spyOn(console, 'info').mockImplementation(),
      warn: jest.spyOn(console, 'warn').mockImplementation(),
      error: jest.spyOn(console, 'error').mockImplementation()
    };
  });

  afterEach(() => {
    Object.values(consoleSpy).forEach(spy => spy.mockRestore());
  });

  describe('log levels', () => {
    it('debug 绾у埆搴旇褰曟墍鏈夋棩蹇?, () => {
      const logger = new Logger('debug');
      logger.debug('debug message');
      logger.info('info message');
      logger.warn('warn message');
      logger.error('error message');

      expect(consoleSpy.debug).toHaveBeenCalled();
      expect(consoleSpy.info).toHaveBeenCalled();
      expect(consoleSpy.warn).toHaveBeenCalled();
      expect(consoleSpy.error).toHaveBeenCalled();
    });

    it('info 绾у埆搴旇烦杩?debug 鏃ュ織', () => {
      const logger = new Logger('info');
      logger.debug('debug message');
      logger.info('info message');

      expect(consoleSpy.debug).not.toHaveBeenCalled();
      expect(consoleSpy.info).toHaveBeenCalled();
    });

    it('error 绾у埆搴斿彧璁板綍 error', () => {
      const logger = new Logger('error');
      logger.debug('debug message');
      logger.info('info message');
      logger.warn('warn message');
      logger.error('error message');

      expect(consoleSpy.debug).not.toHaveBeenCalled();
      expect(consoleSpy.info).not.toHaveBeenCalled();
      expect(consoleSpy.warn).not.toHaveBeenCalled();
      expect(consoleSpy.error).toHaveBeenCalled();
    });
  });

  describe('formatMessage', () => {
    it('搴斿寘鍚椂闂存埑鍜岀骇鍒?, () => {
      const logger = new Logger('info');
      logger.info('test message');

      const call = consoleSpy.info.mock.calls[0][0];
      expect(call).toMatch(/\[.*\] \[INFO\] test message/);
    });
  });

  describe('error with Error object', () => {
    it('搴斿寘鍚敊璇秷鎭?, () => {
      const logger = new Logger('error');
      const error = new Error('test error');
      logger.error('operation failed', error);

      const call = consoleSpy.error.mock.calls[0][0];
      expect(call).toContain('operation failed');
      expect(call).toContain('test error');
    });
  });

  describe('setLevel / getLevel', () => {
    it('搴斿姩鎬佽皟鏁存棩蹇楃骇鍒?, () => {
      const logger = new Logger('error');
      expect(logger.getLevel()).toBe('error');

      logger.setLevel('debug');
      expect(logger.getLevel()).toBe('debug');
    });
  });
});
