const textBox = document.getElementById("text");
const speedSlider = document.getElementById("speed");
const saveBtn = document.getElementById("save");

chrome.storage.sync.get(["text", "speed"], (data) => {
  if (data.text) textBox.value = data.text;
  if (data.speed) speedSlider.value = data.speed;
});

saveBtn.onclick = () => {
  chrome.storage.sync.set({
    text: textBox.value,
    speed: speedSlider.value
  });
};