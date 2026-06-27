/**
 * 鏃ュ織宸ュ叿
 * 鏀寔涓嶅悓鏃ュ織绾у埆
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export class Logger {
  private level: LogLevel;
  private levels: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };

  constructor(level: LogLevel = 'info') {
    this.level = level;
  }

  private shouldLog(level: LogLevel): boolean {
    return this.levels[level] >= this.levels[this.level];
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  debug(message: string): void {
    if (this.shouldLog('debug')) {
      console.debug(this.formatMessage('debug', message));
    }
  }

  info(message: string): void {
    if (this.shouldLog('info')) {
      console.info(this.formatMessage('info', message));
    }
  }

  warn(message: string): void {
    if (this.shouldLog('warn')) {
      console.warn(this.formatMessage('warn', message));
    }
  }

  error(message: string, error?: Error): void {
    if (this.shouldLog('error')) {
      const formatted = error
        ? `${this.formatMessage('error', message)}: ${error.message}`
        : this.formatMessage('error', message);
      console.error(formatted);
    }
  }

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  getLevel(): LogLevel {
    return this.level;
  }
}
