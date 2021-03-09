describe("dateInfo", function(){

  let dateTest;
  
  beforeEach(function(){
    dateTest = new dateInfo();
  })

// Helpers are below 

  function date() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    let dateInfo = `${dd}/${mm}/${yyyy}`;
    return dateInfo
  }

  // Tests are below

  describe('dateToday', function(){
    it('gives the days date', function(){
      expect(dateTest.dateToday()).toEqual(date());
    })
    
  })

})
