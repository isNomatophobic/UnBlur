chrome.action.onClicked.addListener(() => {
  console.log("clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "unblur" },
      function (response) {}
    );
  });
});
