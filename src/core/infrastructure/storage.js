const save = (key, value) => localStorage.setItem(key, value);
const get = (key) => localStorage.getItem(key);

export const storage = { save, get };
