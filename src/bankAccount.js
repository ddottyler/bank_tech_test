class BankAccount {
  constructor() {
    this._topOfStatement = 'date || credit || debit || balance\n';
    this._accountBalance = new Balance;
    this._transactionHistory = [];
    this._currentDate = new DateInfo;
    this._MAX_DEPOSIT = 5000;
    this._MAX_WITHDRAWAL = 5000;
  }

  deposit(amount) {
    if (amount > this._MAX_DEPOSIT) {
      return 'Max deposit reached';
    } else {
      this._accountBalance.deposit(amount);
      this.depositTransaction(amount);
    }
  }

  withdraw(amount) {
    if (amount > this._MAX_WITHDRAWAL) {
      return 'Withdrawal limit reached';
    } else if (amount > this._accountBalance.showBalance()) {
      return 'Balance too low for withdrawal';
    } else {
      this._accountBalance.withdraw(amount);
      this.withdrawTransaction(amount);
    }
  }

  showStatement() {
    let statement;
    this._transactionHistory.reverse().forEach((transaction) =>
      statement = this._topOfStatement += transaction.date +
      ' || '+ transaction.credit +
      ' || '+ transaction.debit +
      ' || '+ transaction.balance +'\n');
    return statement;
  }

  depositTransaction(amount) {
    const depositDetails = {date: this._currentDate.dateToday(),
      credit: amount, debit: '',
      balance: this._accountBalance.showBalance()};
    this._transactionHistory.push(depositDetails);
  }

  withdrawTransaction(amount) {
    const withdrawalDetails = {date: this._currentDate.dateToday(),
      credit: '', debit: amount,
      balance: this._accountBalance.showBalance()};
    this._transactionHistory.push(withdrawalDetails);
  }
}
