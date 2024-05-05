export const wait = (time) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, time);
  });
};
