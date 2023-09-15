chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/unblur.js"],
  });
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["assets/alert.css"],
  });
});
