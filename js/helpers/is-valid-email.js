export default email => {
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
  return {
    status: regex.test(String(email).toLowerCase()),
    badStatusMessage: 'E-Mail is not valid'
  };
};
