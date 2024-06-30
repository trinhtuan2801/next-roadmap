const comments = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  text: `Text ${index + 1}`,
}));

export default comments;
