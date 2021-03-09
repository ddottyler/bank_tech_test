class bankAccount{

  constructor(){
    this._tableTop = 'date || credit || debit || balance\n'
    this._accountBalance = new balance;
    this._transactionHistory = []
    this._date = new dateInfo;
  }

  deposit(amount){
    this._accountBalance._balance += amount
    let depositDetails = {date: this._date.dateToday(), credit: amount, debit:'', balance: this._accountBalance.showBalance()}
    this._transactionHistory.push(depositDetails)
  }

  withdraw(amount) {
    this._accountBalance._balance -= amount
    let withdrawalDetails = {date: this._date.dateToday(), credit:'', debit: amount, balance: this._accountBalance.showBalance()}
    this._transactionHistory.push(withdrawalDetails)
  }

  showStatement() {
    let statement;
    this._transactionHistory.reverse().forEach(transaction => 
    statement = this._tableTop += transaction.date +
      ' || '+ transaction.credit +
      ' || '+ transaction.debit +
      ' || '+ transaction.balance +'\n') 
    return statement
  }

}
