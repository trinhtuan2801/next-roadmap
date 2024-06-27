export const wait = (time = 1000) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, time);
  });
};
