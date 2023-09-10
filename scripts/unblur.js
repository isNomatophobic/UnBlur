chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (!msg.action === "unblur") return;
  const allElementsArray = document.getElementsByTagName("*");

  for (let i = 0; i < allElementsArray.length; i += 1) {
    const currentElement = allElementsArray[i];
    if (currentElement.style) {
      const computed = getComputedStyle(currentElement);
      const filter = computed.getPropertyValue("filter");
      const blurIndex = filter.indexOf("blur");

      if (!filter || blurIndex === -1) continue;
      console.log([currentElement]);

      currentElement.style.filter = filter.replace(
        filter.slice(blurIndex, filter.indexOf(")") + 1),
        ""
      );
    }
  }
});
