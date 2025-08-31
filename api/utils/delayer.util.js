const SECONDS = 600;

export const delayResponseUtil = (callback) => {
  setTimeout(() => callback(), SECONDS);
};
