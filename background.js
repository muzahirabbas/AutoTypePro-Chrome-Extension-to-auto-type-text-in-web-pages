chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "startTyping",
    title: "Start Typing",
    contexts: ["editable"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "startTyping") {
    chrome.tabs.sendMessage(tab.id, { action: "startTyping" });
  }
});