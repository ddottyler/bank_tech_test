class Transaction {
  constructor() {
    this._transactionHistory = [];
    this._currentDate = new DateInfo;
  }

  depositTransaction(amount, balance) {
    const depositDetails = {date: this._currentDate.dateToday(),
      credit: amount, debit: '', balance: balance};
    this._transactionHistory.push(depositDetails);
  }

  withdrawTransaction(amount, balance) {
    const withdrawalDetails = {date: this._currentDate.dateToday(),
      credit: '', debit: amount, balance: balance};
    this._transactionHistory.push(withdrawalDetails);
  }
}
