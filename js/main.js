const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('点到了');
});

const picker = document.getElementById('picker');
const nameEl = document.getElementById('name');

picker.addEventListener('change', () => {
  const file = picker.files[0];

  if (!file) return;

  console.log('选中的文件：', file);
  nameEl.textContent = file.name;
});