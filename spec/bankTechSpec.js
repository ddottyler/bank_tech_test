describe("bankTech", function(){
  let bank;
  
  beforeEach(function(){
    bank = new bankTech();
  })

    describe('balance', function() {
      it('should deposit x amount to balance', function(){
        bank.deposit(500);
        expect(bank._balance).toBe(500);
      })

      it('should withdraw x amount from balance', function(){
        bank.deposit(500);
        bank.withdraw(500);
        expect(bank._balance).toBe(0);
      })
    })
  
})






