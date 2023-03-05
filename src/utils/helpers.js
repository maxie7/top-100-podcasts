export const formatDuration = (ms) => {
  const seconds = Math.trunc(ms / 1000);
  const date = new Date(null);

  date.setSeconds(seconds);
  return date.toISOString().slice(11, 19);
};
