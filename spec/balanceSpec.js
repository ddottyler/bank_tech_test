describe("balance", function(){

  let balanceTest;
  
  beforeEach(function(){
    balanceTest = new balance();
  })

  // Tests are below

  describe('balance', function(){
    it('should show the current balance', function(){
      expect(balanceTest.showBalance()).toEqual(0)
    })
  })

})