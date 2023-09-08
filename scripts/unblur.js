export default function () {
  const allElementsArray = document.getElementsByTagName("*");

  for (let i = 0; i < allElementsArray.length; i += 1) {
    const currentElement = allElementsArray[i];
    if (currentElement.style) {
      const filter = currentElement.style.filter;
      const blurIndex = filter.indexOf("blur");
      console.log(filter);
      if (!filter || blurIndex === -1) continue;
      console.log([currentElement]);
      currentElement.style.filter = filter.replace(
        filter.slice(4, filter.indexOf(")") + 1),
        ""
      );
    }
  }
}
