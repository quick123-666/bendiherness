# GitHub MCP 閰嶇疆鎸囧紩

鏈」鐩娇鐢?**GitHub MCP**锛坄@modelcontextprotocol/server-github`锛夎鍔╂墜鎿嶄綔浠撳簱銆?鏈枃浠惰鏄庢€庝箞鎶?token 瀹夊叏鍦板杺缁欏畠鈥斺€?*token 涓嶅啓鍏ヤ粨搴撲换浣曟枃浠?*锛屽叏閮ㄩ€氳繃鐜鍙橀噺娉ㄥ叆銆?
## 涓€銆佺敓鎴?Fine-grained PAT

1. 鎵撳紑 GitHub 鈫?Settings 鈫?Developer settings 鈫?Personal access tokens 鈫?**Fine-grained tokens**
2. 鐐?**Generate new token**
3. **Token name**锛氫緥濡?`claude-code-mcp-harness`
4. **Expiration**锛氬缓璁?30鈥?0 澶╋紝鍒版湡鍓嶈疆鎹?5. **Resource owner**锛氶€変綘涓汉 / 缁勭粐
6. **Repository access**锛氶€?**Only select repositories**锛屽彧鍕炬湰椤圭洰浠撳簱
7. **Permissions**锛堟寜鏈」鐩渶姹傛渶灏忓寲锛夛細

| 绫诲埆 | 鏉冮檺 | 鐢ㄩ€?|
|---|---|---|
| Repository 鈫?Contents | Read and write | 璇绘枃浠躲€乧ommit銆乸ush |
| Repository 鈫?Issues | Read and write | 鍒?/ 鍒涘缓 / 璇勮 Issue |
| Repository 鈫?Pull requests | Read and write | 鍒?/ 鍒涘缓 / 璇勮 / merge PR |
| Repository 鈫?Workflows | Read and write | 濡傞渶瑙﹀彂 Actions |
| Repository 鈫?Administration | Read and write | **浠呭湪闇€瑕?merge PR 鏃跺嬀閫?* |

8. 鐐?**Generate token**锛?*绔嬪埢澶嶅埗**锛堝叧鎺夐〉闈㈠氨鍐嶄篃鐪嬩笉鍒颁簡锛?
## 浜屻€佸湪褰撳墠浼氳瘽娉ㄥ叆 token锛圵indows PowerShell锛?
```powershell
# 涓存椂锛堝綋鍓?PowerShell 杩涚▼锛?$env:GITHUB_TOKEN = "ghp_xxx..."
$env:GITHUB_DEFAULT_OWNER = "your-org"
$env:GITHUB_DEFAULT_REPO = "your-repo"

# 鎸佷箙锛堝啓鍏ョ敤鎴风骇鐜鍙橀噺锛岄噸鍚悗浠嶇敓鏁堬紱涓嶄細琚?git 璺熻釜锛?[Environment]::SetEnvironmentVariable("GITHUB_TOKEN", "ghp_xxx...", "User")
[Environment]::SetEnvironmentVariable("GITHUB_DEFAULT_OWNER", "your-org", "User")
[Environment]::SetEnvironmentVariable("GITHUB_DEFAULT_REPO", "your-repo", "User")
```

## 浜?bis銆乵acOS / Linux锛坺sh / bash锛?
```bash
# 涓存椂
export GITHUB_TOKEN="ghp_xxx..."
export GITHUB_DEFAULT_OWNER="your-org"
export GITHUB_DEFAULT_REPO="your-repo"

# 鎸佷箙锛堝啓鍏?~/.zshrc 鎴?~/.bashrc锛?echo 'export GITHUB_TOKEN="ghp_xxx..."' >> ~/.zshrc
echo 'export GITHUB_DEFAULT_OWNER="your-org"' >> ~/.zshrc
echo 'export GITHUB_DEFAULT_REPO="your-repo"' >> ~/.zshrc
```

## 涓夈€侀獙璇?token 鍙敤

```bash
curl -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user
```

搴旇繑鍥?200锛屼笖 body 閲?`login` 鏄綘鐨勭敤鎴峰悕銆?
## 鍥涖€佸惎鍔?Claude Code + MCP

```bash
# 鍚姩 Claude Code锛屽姞杞?.claude/mcp.json
claude --mcp-config .claude/mcp.json
```

鍚姩鍚庡姪鎵嬩細鑷姩鑾峰緱 GitHub MCP 鐨勫伐鍏凤紙`mcp__github__*`锛夈€?
## 浜斻€佸畨鍏ㄧ孩绾匡紙涓庢湰椤圭洰 settings.json 瀵归綈锛?
- **缁濅笉**鎶?token 鍐欏叆 `mcp.json`銆乣CLAUDE.md`銆乣.env`銆乣*.key`銆乣*.pem`
- **缁濅笉**鍦ㄨ亰澶╃獥鍙ｉ噷绮樿创 token 璁╁姪鎵?甯綘瀛?鈥斺€擿SOLO Design` 浼氭嫆缁濇墽琛?- token 娉勯湶鍚庣珛鍒诲幓 GitHub **Revoke**锛屽苟閲嶆柊鐢熸垚
- 浠撳簱琚?push --force銆乺eset --hard 鏃讹紝**Bash 灞?deny 浠嶇敓鏁?*锛堝弬瑙?`.claude/settings.json`锛夈€侻CP 閫氶亾鍙 GitHub OAuth scope 闄愬埗锛屼笉琚湰鍦?deny 鎷︽埅

## 鍏€佽兘鍔涜竟鐣岋紙鐢ㄦ埛鎺堟潈 vs 瀹為檯 scope锛?
- **鐢ㄦ埛鎺堟潈**锛堜綘鍒氬垰閫夌殑锛夛細鍙 + Issue/PR 璇勮 + push/merge/鍚堝苟 PR
- **瀹為檯鑳藉姏** = GitHub PAT/APP 鐨?OAuth scope
- 濡傛灉浣犳兂"鍏ㄥ紑 push/merge"锛孭AT 鐨?`Administration` 蹇呴』鍕?`Read and write`锛屽惁鍒?GitHub 绔細鎷掔粷 merge 璋冪敤

## 涓冦€佷笉鍦?PAT 閲屽仛鐨勪簨

- 涓嶈缁?PAT 閭 / admin:org / gist / delete_repo 绛夎繃瀹界殑 scope
- 涓嶈鎶婂悓涓€涓?PAT 鐢ㄥ湪澶氫釜椤圭洰 / 澶氬彴鏈哄櫒
- 涓嶈鎶?PAT 鍐欏湪 README銆乮ssue銆丳R 璇勮閲岋紙鍗充娇鏄祴璇曪級