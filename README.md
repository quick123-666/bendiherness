# bendiherness - 鏈湴浣跨敤鐗?
Level 2 鍥㈤槦 Harness 椤圭洰锛岄潰鍚戞湰鍦板紑鍙戝満鏅€?
## 椤圭洰瀹氫綅

- **鏈湴浼樺厛**锛氭晱鎰熶俊鎭€氳繃鐜鍙橀噺娉ㄥ叆锛屼笉鍐欏叆浠撳簱
- **Solo 妯″紡**锛氬崟鍔╂墜妯℃嫙鍥㈤槦鍗忎綔锛坅rchitect + test-writer + review-pr锛?- **瀹夊叏鎶ゆ爮**锛歚settings.json` 瀹氫箟鏉冮檺杈圭晫锛孧CP 璧扮嫭绔嬮€氶亾

## 鐩綍缁撴瀯

```
E:\bendiherness\
鈹溾攢鈹€ src\                    # 婧愪唬鐮?鈹?  鈹溾攢鈹€ index.ts           # 鍏ュ彛
鈹?  鈹斺攢鈹€ lib\               # 鏍稿績妯″潡
鈹溾攢鈹€ tests\                  # 娴嬭瘯鏂囦欢
鈹?  鈹溾攢鈹€ unit\              # 鍗曞厓娴嬭瘯
鈹?  鈹斺攢鈹€ integration\       # 闆嗘垚娴嬭瘯
鈹溾攢鈹€ docs\                   # 鏂囨。
鈹溾攢鈹€ .claude\               # Harness 閰嶇疆
鈹?  鈹溾攢鈹€ settings.json      # 鏉冮檺娓呭崟
鈹?  鈹溾攢鈹€ mcp.json           # MCP 鏈嶅姟鍣?鈹?  鈹溾攢鈹€ agents\            # Agent 瀹氫箟
鈹?  鈹斺攢鈹€ skills\            # Skill 瀹氫箟
鈹溾攢鈹€ CLAUDE.md              # 椤圭洰瑙勭害
鈹溾攢鈹€ SETUP-GITHUB-MCP.md    # GitHub MCP 閰嶇疆鎸囧紩
鈹斺攢鈹€ README.md              # 鏈枃浠?```

## 鐜鍙橀噺锛堟湰鍦版敞鍏ワ紝涓嶅啓鍏ユ枃浠讹級

| 鍙橀噺 | 鐢ㄩ€?| 鏉ユ簮 |
|------|------|------|
| `GITHUB_TOKEN` | GitHub MCP 璁よ瘉 | Fine-grained PAT |
| `GITHUB_DEFAULT_OWNER` | 榛樿浠撳簱鎵€鏈夎€?| 浣犵殑 GitHub 鐢ㄦ埛鍚?缁勭粐 |
| `GITHUB_DEFAULT_REPO` | 榛樿浠撳簱鍚?| 鏈」鐩粨搴撳悕 |
| `DATABASE_URL` | 鏁版嵁搴撹繛鎺ワ紙鍙€夛級 | PostgreSQL 杩炴帴涓?|

## 蹇€熷紑濮?
### 1. 娉ㄥ叆鐜鍙橀噺锛圥owerShell锛?
```powershell
# 涓存椂锛堝綋鍓嶄細璇濓級
$env:GITHUB_TOKEN = "ghp_xxx..."
$env:GITHUB_DEFAULT_OWNER = "your-username"
$env:GITHUB_DEFAULT_REPO = "bendiherness"

# 鎸佷箙锛堢敤鎴风骇锛?[Environment]::SetEnvironmentVariable("GITHUB_TOKEN", "ghp_xxx...", "User")
[Environment]::SetEnvironmentVariable("GITHUB_DEFAULT_OWNER", "your-username", "User")
[Environment]::SetEnvironmentVariable("GITHUB_DEFAULT_REPO", "bendiherness", "User")
```

### 2. 瀹夎渚濊禆

```bash
npm install
```

### 3. 杩愯娴嬭瘯

```bash
npm test
```

## Agent 浣跨敤

| Agent | 瑙﹀彂鍦烘櫙 | 宸ュ叿鏉冮檺 |
|-------|---------|---------|
| `architect` | 鏋舵瀯瀹℃煡璇锋眰 | 鍙锛圧ead/Grep/Glob锛?|
| `test-writer` | 娴嬭瘯鐢熸垚璇锋眰 | 璇诲啓 + Bash |
| `review-pr` | PR 瀹℃煡 | GitHub MCP锛堥渶 token锛?|

## 瀹夊叏绾㈢嚎

- 绂佹淇敼 `.env*` / `*.key` / `*.pem` / `secrets/`
- 绂佹鎵ц `rm -rf` / `git push --force` / `git reset --hard`
- 绂佹鍒犻櫎鏂囦欢鍓嶄笉纭
- MCP 閫氶亾鐙珛浜庢湰鍦?deny 瑙勫垯锛岃兘鍔涚敱 PAT scope 鍐冲畾

## 璁稿彲璇?
MIT
