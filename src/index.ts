/**
 * bendiherness 鍏ュ彛
 * Level 2 鍥㈤槦 Harness 椤圭洰 - 鏈湴浣跨敤鐗? */

export { ConfigManager } from './lib/config';
export { Logger } from './lib/logger';
export { HealthChecker } from './lib/health';

export interface ProjectInfo {
  name: string;
  version: string;
  level: number;
  mode: 'solo' | 'team';
}

export function getProjectInfo(): ProjectInfo {
  return {
    name: 'bendiherness',
    version: '0.1.0',
    level: 2,
    mode: 'solo'
  };
}
