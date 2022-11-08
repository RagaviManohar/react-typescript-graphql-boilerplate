/**
 * set value to LocalStorage
 */
export const setLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

/**
 * get value from LocalStorage
 */
export const getLocalStorage = (key: string) => localStorage.getItem(key);
