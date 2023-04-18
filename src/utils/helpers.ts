export const formatDuration = (ms: number) => {
  const seconds = Math.trunc(ms / 1000);
  const date = new Date(+0);

  date.setSeconds(seconds);
  return date.toISOString().slice(11, 19);
};
