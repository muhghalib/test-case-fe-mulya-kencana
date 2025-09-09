export function omit<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, Exclude<keyof T, K>> {
  const result = { ...obj };

  for (const key of keys) {
    delete result[key];
  }

  return result;
}
