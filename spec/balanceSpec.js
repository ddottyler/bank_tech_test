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

  describe('deposit', function(){
    it('should add to the current balance', function(){
      balanceTest.deposit(500)
      expect(balanceTest.showBalance()).toEqual(500)
    })
  })

  describe('withdraw', function(){
    it('should reduce the current balance', function(){
      balanceTest.deposit(500)
      balanceTest.withdraw(300)
      expect(balanceTest.showBalance()).toEqual(200)
    })
  })

})