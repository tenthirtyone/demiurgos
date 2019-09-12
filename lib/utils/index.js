function getUnixTime() {
  return new Date().getTime() / 1000;
}

module.exports = {
  getUnixTime
};
