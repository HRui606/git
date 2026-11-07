// ---- 1. 抓元素 ----
const picker = document.getElementById('picker');
const nameEl = document.getElementById('name');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const seekBar = document.getElementById('seekBar');
const currentEl = document.getElementById('current');
const durationEl = document.getElementById('duration');

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

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

audio.addEventListener('play',  () => { playBtn.textContent = '暂停'; });
audio.addEventListener('pause', () => { playBtn.textContent = '播放'; });
audio.addEventListener('ended', () => { playBtn.textContent = '播放'; });
});

// 秒 → 03:45
function formatTime(sec) {
  if (!Number.isFinite(sec)) return '00:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

// 元数据就绪 → 总时长
audio.addEventListener('loadedmetadata', () => {
  seekBar.max = audio.duration;
  durationEl.textContent = formatTime(audio.duration);
});

// 播放中 → 进度
audio.addEventListener('timeupdate', () => {
  seekBar.value = audio.currentTime;
  currentEl.textContent = formatTime(audio.currentTime);
});