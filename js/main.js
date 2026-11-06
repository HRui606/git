// ---- 1. 抓元素 ----
const btn = document.getElementById('btn');
const picker = document.getElementById('picker');
const nameEl = document.getElementById('name');
const audio = document.getElementById('audio');

// ---- 2. 状态 ----
let currentUrl = null;

// ---- 台阶 1：按钮点击 ----
btn.addEventListener('click', () => {
  console.log('点到了');
});

// ---- 台阶 2 + 3：选文件 → 显示歌名 → 变成音频地址 ----
picker.addEventListener('change', () => {
  const file = picker.files[0];
  if (!file) return;

  nameEl.textContent = file.name;

  if (currentUrl) URL.revokeObjectURL(currentUrl);
  currentUrl = URL.createObjectURL(file);
  audio.src = currentUrl;

  console.log('音频地址：', audio.src);
});