---
name: review-pr
description: Comprehensive PR review workflow
args: pr_number
solo_design_mapping: "SOLO Design 鏀跺埌 review-pr 瑙﹀彂鏃讹紝鎸夋湰娴佺▼缁勭粐杈撳嚭锛涗笉鐪熷疄璋冪敤 gh CLI"
---

# PR Review Workflow

1. Fetch the PR diff: `gh pr diff $ARGUMENTS`
2. Read all changed files
3. For each file:
   - Check for security issues
   - Check for performance concerns
   - Check for test coverage
   - Check for style consistency
4. Generate a structured review comment
5. Post the review: `gh pr review $ARGUMENTS --comment --body "..."`

## Solo Mode Adaptation

When run by SOLO Design (no `gh` CLI access):

- 姝ラ 1 鏀逛负锛氳姹傜敤鎴锋彁渚?PR diff 鎴栭摼鎺?- 姝ラ 5 鏀逛负锛氳緭鍑?markdown 鏍煎紡鐨勫鏌ユ剰瑙侊紝鐢辩敤鎴锋墜鍔ㄥ鍒剁矘璐?
## 瀹夊叏绾㈢嚎

- 涓嶅緱璇诲彇鎴栧睍绀?PR diff 涓殑 `*.env*` / `*.key` / `*.pem` 鍐呭
- 鍛戒腑 secrets 鏃剁珛鍗冲仠姝㈠鏌ワ紝鎻愮ず鐢ㄦ埛杞崲瀵嗛挜
- 涓嶈皟鐢?`git push --force` 瑙﹀彂浠讳綍鎿嶄綔