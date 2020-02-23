export default word => {
  return `${String(word)
    .charAt(0)
    .toUpperCase()}${String(word).substr(1)}`;
};
