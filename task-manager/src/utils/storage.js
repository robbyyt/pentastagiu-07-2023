export const safeParse = (json, fallback) => {
  try {
    return JSON.parse(json) ?? fallback;
  } catch (err) {
    console.error(err);
    return fallback;
  }
};
