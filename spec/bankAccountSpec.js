describe('BankAccount', function() {
  let account;

  const OVER_MAX = 5001;

  beforeEach(function() {
    account = new BankAccount();
  });

  // Helpers are below

  function depositAndWithdraw() {
    account.deposit(500);
    account.withdraw(500);
  }

  function date() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1;
    const yyyy = today.getFullYear();
    const dateInfo = `${dd}/${mm}/${yyyy}`;
    return dateInfo;
  }

  // Tests are below

  describe('deposit', function() {
    it('should deposit x amount to balance', function() {
      account.deposit(500);
      expect(account._balance.showBalance()).toBe(500);
    });

    it('should prevent deposits of over the max limit being made', function() {
      expect(account.deposit(OVER_MAX)).toEqual('Max deposit reached');
    });

    describe('depositTransaction', function() {
      it('should make a full record of deposit', function() {
        account.deposit(500);
        expect(account._transactions._transactionHistory[0]).toEqual(
            {date: date(), credit: 500.00, debit: '', balance: 500.00});
      });
    });
  });

  describe('withdraw', function() {
    it('should withdraw x amount from balance', function() {
      depositAndWithdraw();
      expect(account._balance.showBalance()).toBe(0);
    });

    it('should prevent withdrawal above the max withdrawal limit', function() {
      expect(account.withdraw(OVER_MAX)).toEqual('Withdrawal limit reached');
    });

    it('should reject withdrawal if balance is too low', function() {
      expect(account.withdraw(10)).toEqual('Balance too low for withdrawal');
    });

    describe('withdrawTransaction', function() {
      it('should make a full record of withdrawal details', function() {
        depositAndWithdraw();
        expect(account._transactions._transactionHistory[1]).toEqual(
            {date: date(), credit: '', debit: 500.00, balance: 0});
      });
    });
  });

  describe('showStatement', function() {
    it('should show full details of all transactions', function() {
      account.deposit(1000);
      account.deposit(2000);
      account.withdraw(500);
      expect(account.showStatement()).toEqual(
          'date || credit || debit || balance\n' +
        `${date()} ||  || 500 || 2500\n` +
        `${date()} || 2000 ||  || 3000\n` +
        `${date()} || 1000 ||  || 1000\n`,
      );
    });
  });
});
