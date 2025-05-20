let visitCount = 0;

module.exports = {
  increaseVisit() {
    visitCount++;
  },
  getVisits() {
    return visitCount;
  }
};
