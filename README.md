# 本地音乐播放器

一个纯前端实现的本地音乐播放器，无需后端，浏览器直接运行。

## 功能

- 选择本地 mp3 / flac 文件播放
- 播放 / 暂停切换
- 进度条实时显示与拖动跳转
- 音量调节
- 显示歌曲时长

## 技术栈

原生 HTML / CSS / JavaScript，无框架、无构建工具。

## 关键实现

- 用 `URL.createObjectURL()` 把用户选择的 `File` 转成浏览器可播放的 `blob:` 地址，
  并通过 `URL.revokeObjectURL()` 在切歌时释放，避免内存泄漏。
- 播放状态以 `<audio>` 元素为唯一数据源，按钮文案由 `play` / `pause` / `ended`
  事件驱动，而非在点击回调中直接修改。
- 拖动进度条时用 `isSeeking` 状态屏蔽 `timeupdate` 的回写，避免滑块与用户操作互相抢占。

## 运行

用 VS Code 的 Live Server 打开 `index.html`（必须通过 http 访问，`file://` 会导致脚本无法加载）。

## 开发记录

按 10 个台阶迭代，从"页面出现标题"到"完整播放器"，每次迭代对应一个 commit 与 tag。

在线演示：https://hrui606.github.io/music-player/