export default word => {
  return String(word).replace(/([A-Z])/g, ' $1');
};
