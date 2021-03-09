describe('bankAccount', function(){
  
  let account;

  let ONE_OVER_MAX_DEPOSIT = 5001
  let ONE_OVER_MAX_WITHDRAWAL = 5001
  
  beforeEach(function(){
    account = new bankAccount();
  })

  // Helpers are below 

  function depositAndWithdraw(){
    account.deposit(500);
    account.withdraw(500);
  }

  function date() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    let dateInfo = `${dd}/${mm}/${yyyy}`;
    return dateInfo
  }

  // Tests are below

  describe('deposit', function() {
      
    it('should deposit x amount to balance', function(){
      account.deposit(500);
      expect(account._accountBalance.showBalance()).toBe(500);
    })

    it('should prevent deposits of over the max limit being made', function(){
      expect(account.deposit(ONE_OVER_MAX_DEPOSIT)).toEqual('Max deposit reached')

    })

  })

  describe('depositTransaction', function(){

    it('should make a full record of deposit, including date, transaction type and total balance', function(){
      account.deposit(500);
      expect(account._transactionHistory[0]).toEqual(
        {date: date(), credit: 500.00, debit:'', balance: 500.00})
    })

  })

  describe('withdraw', function(){

    it('should withdraw x amount from balance', function(){
      depositAndWithdraw()
      expect(account._accountBalance.showBalance()).toBe(0);
    })

    it('should prevent withdrawal above the max withdrawal limit', function(){
      expect(account.withdraw(ONE_OVER_MAX_WITHDRAWAL)).toEqual('Withdrawal limit reached')
    })

    it('should prevent withdrawal if there is not enough money in balance', function(){
      expect(account.withdraw(10)).toEqual('There is not enough money in this account for the requested withdrawal')
    })

  })

  describe('withdrawTransaction', function(){

    it('should make a full record of withdrawal, including date, transaction type and total balance', function(){
      depositAndWithdraw()
      expect(account._transactionHistory[1]).toEqual(
        {date: date(), credit:'', debit: 500.00, balance: 0})
    })

  })

  describe('showStatement', function(){

    it('should show full details of all transactions', function(){
      account.deposit(1000);
      account.deposit(2000);
      account.withdraw(500);
      expect(account.showStatement()).toEqual(
        'date || credit || debit || balance\n' +
        `${date()} ||  || 500 || 2500\n` +
        `${date()} || 2000 ||  || 3000\n` +
        `${date()} || 1000 ||  || 1000\n`
      )
    })

  })

})
