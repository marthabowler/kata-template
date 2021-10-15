function order(words: string): string {
  let result = [];
  let text = words.split(" ");

  if (words === "") {
    return "";
  }

  for (let i = 1; i < 10; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[j].includes(i.toString())) {
        result.push(text[j]);
      }
    }
  }
  let strResult = result.join(" ");
  return strResult;
}
export default order;
