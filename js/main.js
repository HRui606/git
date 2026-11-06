// ---- 1. 抓元素 ----
const picker = document.getElementById('picker');
const nameEl = document.getElementById('name');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');

// ---- 2. 状态 ----
let currentUrl = null;

// ---- 台阶 2 + 3 ----
picker.addEventListener('change', () => {
  const file = picker.files[0];
  if (!file) return;

  nameEl.textContent = file.name;

  if (currentUrl) URL.revokeObjectURL(currentUrl);
  currentUrl = URL.createObjectURL(file);
  audio.src = currentUrl;

  console.log('音频地址：', audio.src);
});

// ---- 台阶 4 ----
playBtn.addEventListener('click', () => {
  if (!audio.src) {
    console.log('还没选歌呢');
    return;
  }
  audio.play();
});