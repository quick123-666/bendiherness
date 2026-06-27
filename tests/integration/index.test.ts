/**
 * 鍏ュ彛闆嗘垚娴嬭瘯
 */

import { getProjectInfo } from '../../src/index';

describe('Index exports', () => {
  describe('getProjectInfo', () => {
    it('搴旇繑鍥炴纭殑椤圭洰淇℃伅', () => {
      const info = getProjectInfo();
      expect(info.name).toBe('bendiherness');
      expect(info.version).toBe('0.1.0');
      expect(info.level).toBe(2);
      expect(info.mode).toBe('solo');
    });
  });
});
