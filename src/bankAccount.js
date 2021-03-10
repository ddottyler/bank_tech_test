class BankAccount {
  constructor() {
    this._topOfStatement = 'date || credit || debit || balance\n';
    this._balance = new Balance;
    this._transactions = new Transaction;
    this._MAX_DEPOSIT = 5000;
    this._MAX_WITHDRAWAL = 5000;
  }

  deposit(num) {
    if (num > this._MAX_DEPOSIT) {
      return 'Max deposit reached';
    } else {
      this._balance.deposit(num);
      this._transactions.depositTransaction(num, this._balance.showBalance());
    }
  }

  withdraw(num) {
    if (num > this._MAX_WITHDRAWAL) {
      return 'Withdrawal limit reached';
    } else if (num > this._balance.showBalance()) {
      return 'Balance too low for withdrawal';
    } else {
      this._balance.withdraw(num);
      this._transactions.withdrawTransaction(num, this._balance.showBalance());
    }
  }

  showStatement() {
    let statement;
    this._transactions._transactionHistory.reverse().forEach((transaction) =>
      statement = this._topOfStatement += transaction.date +
      ' || '+ transaction.credit +
      ' || '+ transaction.debit +
      ' || '+ transaction.balance +'\n');
    return statement;
  }
}
