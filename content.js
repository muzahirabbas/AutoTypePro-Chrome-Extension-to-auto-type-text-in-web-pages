chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "startTyping") {
    chrome.storage.sync.get(["text", "speed"], (data) => {
      typeText(data.text || "", parseInt(data.speed) || 70);
    });
  }
});

async function typeText(text, speed) {
  const el = document.activeElement;
  if (!el) return;

  // convert slider value into delay (higher = faster)
  let delay = Math.max(1, 101 - speed);

  // ultra fast mode
  if (speed >= 98) {
    el.value += text;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    return;
  }

  for (let char of text) {
    el.value += char;
    el.dispatchEvent(new Event("input", { bubbles: true }));

    // slight randomness so it doesn't feel robotic
    const jitter = Math.random() * 10;
    await new Promise(r => setTimeout(r, delay + jitter));
  }
}