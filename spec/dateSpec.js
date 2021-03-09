describe('DateInfo', function() {
  let dateTest;

  beforeEach(function() {
    dateTest = new DateInfo();
  });

  // Helpers are below

  function date() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1;
    const yyyy = today.getFullYear();
    const dateInfo = `${dd}/${mm}/${yyyy}`;
    return dateInfo;
  }

  // Tests are below

  describe('dateToday', function() {
    it('gives the days date', function() {
      expect(dateTest.dateToday()).toEqual(date());
    });
  });
});
