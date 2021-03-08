describe("bankTech", function(){
  let bank;
  
  beforeEach(function(){
    bank = new bankTech();
  })

// Helpers are below 
  function depositAndWithdraw(){
    bank.deposit(500);
    bank.withdraw(500);
  }

// Tests are below

    describe('deposit', function() {
      it('should deposit x amount to balance', function(){
        bank.deposit(500);
        expect(bank._balance).toBe(500);
      })

      it('should make a full record of deposit, including date, transaction type and total balance', function(){
        bank.deposit(500);
        expect(bank._transactionHistory[0]).toEqual(
          {date: "8/3/2021", credit: 500.00, debit: null, balance: 500.00}
          )
      })

    })

    describe('withdraw', function(){
      it('should withdraw x amount from balance', function(){
        depositAndWithdraw()
        expect(bank._balance).toBe(0);
      })

      it('should make a full record of withdrawal, including date, transaction type and total balance', function(){
        depositAndWithdraw()
        expect(bank._transactionHistory[1]).toEqual(
          {date: "8/3/2021", credit: null, debit: 500.00, balance: 0}
        )
      })

    })
  
})






