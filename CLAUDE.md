# CLAUDE.md

> 鏈枃浠跺師鏈槸缁?Claude Code CLI 鐢ㄧ殑绯荤粺绾х害鏉熴€傚綋鍓嶇幆澧冧腑娌℃湁 Claude Code锛? 
> 鐢?**SOLO Design**锛堝伐浣滃尯鍔╂墜锛変綔涓?*椤圭洰绾ц绾?*鏉ラ伒瀹堛€? 
> 闃呰鏈枃妗ｆ椂锛屾寜"鎴戝簲璇ラ伒瀹堢殑鏈湴瑙勫垯"鐞嗚В锛岃€岄潪"椹卞姩 Claude Code 鐨勯厤缃?銆?
## 椤圭洰姒傝堪

- 宸ヤ綔鍖猴細`e:\bendiherness`
- 褰撳墠闃舵锛?*Level 2 鍥㈤槦 Harness**锛圫olo 鍗曞姪鎵嬶紝妯℃嫙鍥㈤槦 Agent / Skill / MCP 閰嶇疆锛?- 鍙傝€冩暀绋嬶細`harness-engineering-瀹屾暣鏁欑▼.md`锛堢鍗佷笁绔?13.2锛?- 宸ヤ綔鍖哄姪鎵嬶細SOLO Design锛堜腑鏂囦紭鍏堛€佽瑙夊悜锛?
## 瑙掕壊涓庤竟鐣?
鎴戯紙SOLO Design锛夊湪璇ラ」鐩腑锛?
- 鉁?鍙互璇汇€佸啓 `e:\bendiherness` 涓嬫墍鏈夐潪涓婁紶鍙鏂囦欢
- 鉁?鍙互璋冪敤璁捐绫绘妧鑳斤紙solo-design銆乨esign-library-creator銆乫rontend-design銆亀eb-design-engineer锛?- 鉂?涓嶈兘淇敼 `harness-engineering-瀹屾暣鏁欑▼.md`锛堢敤鎴峰涔犺祫浜э級
- 鉂?涓嶈兘淇敼 `.uploads/` 涓嬩换浣曟枃浠讹紙绯荤粺绾у彧璇伙級
- 鉂?涓嶈兘鎵ц `sudo`銆乣rm -rf`銆乣git push --force`銆乣git reset --hard`
- 鉂?涓嶄富鍔ㄥ垹闄や换浣曟枃浠讹紝鍒犻櫎鍓嶅繀椤诲厛 `Read` 骞跺悜鐢ㄦ埛纭

## 鐩綍缁撴瀯

- `harness-engineering-瀹屾暣鏁欑▼.md`锛氭暀绋嬪師鏂囷紙**鍙**锛?- `CLAUDE.md`锛氭湰鏂囦欢
- `.claude/settings.json`锛氳鍒欐竻鍗曪紙**SOLO Design 蹇呴』鑷**锛?- `.uploads/`锛氱敤鎴蜂笂浼犳枃浠讹紙**鍙**锛?
## 宸ヤ綔娴佺▼锛堟瘡娆′細璇濆紑濮嬪墠锛?
1. `Read` 鏈枃浠讹紝纭浠嶅湪 Level 2 妯″紡
2. `Read .claude/settings.json`锛屾妸 `permissions` 鍜?`hooks` 褰撲綔鑷垜绾︽潫娓呭崟
3. 娑夊強鍒犻櫎銆佽鐩栥€佷笉鍙€嗘搷浣滄椂锛屽厛鍋滀笅鏉ュ悜鐢ㄦ埛纭
4. 鍐欏叆 `*.md` / `*.json` 鏃讹紝妯′豢 `hooks.PreToolUse` 琛屼负锛氬厛鎵撳嵃鐩爣璺緞
5. 璁捐浠诲姟浼樺厛鎸?`.claude/agents/` 鐨勮鑹插垎宸ユ€濊€冿紙arch 瀹¤銆乼est-writer 楠岃瘉锛?6. 璋冪敤澶栭儴宸ュ叿鍓嶅厛鐪?`.claude/mcp.json` 鏄惁鏈夊搴?server

## 娌熼€氱害瀹?
- 榛樿涓枃
- 鐢?Markdown锛屼絾绂佺敤宓屽鍒楄〃銆乪moji锛堥櫎闈炵敤鎴锋槑纭姹傦級
- 鏂囦欢寮曠敤鐢ㄥ弽寮曞彿鍖呰矾寰勶紝涓嶈鏆撮湶鍐呴儴鏍囩
- 绠€鐭瓟澶嶄紭鍏堬紱鍙湁鐢ㄦ埛璇?灞曞紑/璇︾粏璇存槑"鏃舵墠闀跨瓟

## Hook 妯℃嫙锛堣涓哄眰锛?
| 鍘?Hook | 鎴戣鎬庝箞鍋?|
|---|---|
| `PreToolUse: Write(*.md)` | 鍐欏叆鍓嶅厛 echo 鐩爣璺緞 |
| `PreToolUse: Write(*.json)` | 鍐欏叆鍓嶅厛 echo 鐩爣璺緞锛屼笖鍏?`Read` 鐜板瓨鍐呭闃茶鐩?|
| `PostToolUse: Bash(npm *)` | 鑻ョ敤鎴疯窇浜?npm锛屾彁绀烘槸鍚﹁ lint锛堝鏈厤缃垯璺宠繃锛?|

## 鑷娓呭崟

- [x] `CLAUDE.md` 宸查噸鍐欎负 SOLO Design 鍙鐨勬湰鍦拌绾?- [x] `.claude/settings.json` 宸查噸鍐欎负 SOLO Design 鍙鐨勮鍒欒〃
- [x] Level 1 鈫?Level 2 鍗囩骇锛坅rch agent銆乼est-writer agent銆乵cp.json銆乻kills锛?- [ ] 涓嬩竴娆′細璇濆紑濮嬫椂鎸変笂杩版祦绋?1-6 姝ユ墽琛