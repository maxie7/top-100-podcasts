export const htmlDecode = (content) => {
  const e = document.createElement('div');
  e.innerHTML = content;
  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};
