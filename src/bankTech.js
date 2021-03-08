class bankTech {

  constructor() {
    this._balance = 0;
    this._transactionHistory = []
  }

  deposit(amount) {
    this._balance += amount
    let depositDetails = {date: this.date(), credit: amount, debit:'', balance: this._balance}
    this._transactionHistory.push(depositDetails)
    // localStorage.setItem("transactionHistory", this._transactionHistory);
  }

  withdraw(amount) {
    this._balance -= amount
    let withdrawalDetails = {date: this.date(), credit:'', debit: amount, balance: this._balance}
    this._transactionHistory.push(withdrawalDetails)
    // localStorage.setItem("transactionHistory", this._transactionHistory);
  }

  showStatement() {
    let tableTop = 'date || credit || debit || balance\n'
    let update;
    this._transactionHistory.reverse().forEach(transaction => update = tableTop += transaction.date +' || '+ transaction.credit +' || '+ transaction.debit +' || '+ transaction.balance +'\n')
    return update
    // console.log('date || credit || debit || balance')
    // for(let i = this._transactionHistory.length - 1; i >= 0; i--)
    // console.log(`${this._transactionHistory[i].date} || ${this._transactionHistory[i].credit} || ${this._transactionHistory[i].debit} || ${this._transactionHistory[i].balance}`)
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