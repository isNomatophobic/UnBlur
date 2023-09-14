chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["assets/alert.css"],
  });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/unblur.js"],
  });
});
