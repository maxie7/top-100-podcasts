export const htmlDecode = (content) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = content.replace(/\n/g, '<br />');
  return textArea.value;
};
