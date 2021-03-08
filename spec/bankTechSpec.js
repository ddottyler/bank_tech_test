describe("bankTech", function(){
  let bank;
  
  beforeEach(function(){
    bank = new bankTech();
  })

    describe('deposit', function() {
      it('should deposit x amount to balance', function(){
        bank.deposit(500);
        expect(bank._balance).toBe(500);
      })

      it('should make a full record of deposit, including date, transaction type and total balance', function(){
        bank.deposit(500);
        expect(bank._transactionHistory[0]).toEqual(
          {date: "8/3/2021", credit: 500.00, debit: null, balance: 500.00})
      })

    })

    describe('withdraw', function(){
      it('should withdraw x amount from balance', function(){
        bank.deposit(500);
        bank.withdraw(500);
        expect(bank._balance).toBe(0);
      })
    })
  
})






