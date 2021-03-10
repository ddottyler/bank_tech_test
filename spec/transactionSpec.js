describe('BankAccount', function() {
  beforeEach(function() {
    date = new DateInfo();
    transaction = new Transaction();
  });

  // Tests are below

  describe('depositTransaction', function() {
    it('should make a full record of deposit', function() {
      transaction.depositTransaction(500, 500);
      expect(transaction._transactionHistory[0]).toEqual(
          {date: date.dateToday(), credit: 500.00, debit: '', balance: 500.00});
    });
  });

  describe('withdrawTransaction', function() {
    it('should make a full record of deposit', function() {
      transaction.depositTransaction(500, 500);
      transaction.withdrawTransaction(500, 0);
      expect(transaction._transactionHistory[1]).toEqual(
          {date: date.dateToday(), credit: '', debit: 500.00, balance: 0});
    });
  });
});
