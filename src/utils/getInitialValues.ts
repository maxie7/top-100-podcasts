import { storage } from '../core/infrastructure/storage';

export const getInitialValues = (id: string) => {
  const savedData = storage.get(id);
  if (savedData) {
    return JSON.parse(savedData);
  }
  return undefined;
};
