const save = (key: string, value: string) => localStorage.setItem(key, value);
const get = (key: string) => localStorage.getItem(key);

export const storage = { save, get };
