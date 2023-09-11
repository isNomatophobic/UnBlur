chrome.runtime.onMessage.addListener(function (msg) {
  if (!msg.action === "unblur") return;
  const allElementsArray = document.getElementsByTagName("*");

  for (let i = 0; i < allElementsArray.length; i += 1) {
    const currentElement = allElementsArray[i];
    if (currentElement.style) {
      const computed = getComputedStyle(currentElement);
      const filter = computed.getPropertyValue("filter");
      const blurIndex = filter.indexOf("blur");

      if (!filter || blurIndex === -1) continue;

      let blurIndexEnd = undefined;
      let i = 0;
      while (!blurIndexEnd && i < filter.length) {
        if (filter[i] === ")" && i > blurIndex) {
          blurIndexEnd = i + 1;
        }
        i++;
      }
      const newFilter = filter.replace(
        filter.slice(blurIndex, blurIndexEnd),
        ""
      );
      currentElement.style.filter = newFilter.length ? newFilter : "initial";
    }
  }
});
