export const htmlDecode = (content: string) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = content.replace(/\n/g, '<br />');
  return textArea.value;
};
