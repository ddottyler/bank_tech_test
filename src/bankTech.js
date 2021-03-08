class bankTech {

  constructor() {
    this._balance = 0;
    this._transactionHistory = []
  }

  deposit(amount) {
    this._balance += amount
    let depositDetails = {date: this.date(), credit: amount, debit: null, balance: this._balance}
    this._transactionHistory.push(depositDetails)
  }

  withdraw(amount) {
    this._balance -= amount
  }

  date() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    let dateInfo = `${dd}/${mm}/${yyyy}`;
    return dateInfo
  }

}