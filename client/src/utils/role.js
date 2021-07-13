export const scrubFalsyPairs = (object) => {
  return Object.fromEntries(
    Object.entries(object).filter(([key, val]) => !["", null, 0].includes(val))
  );
};
