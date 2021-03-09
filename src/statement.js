class bankAccount{

  constructor(){
    this._topOfStatement = 'date || credit || debit || balance\n'
    this._accountBalance = new balance;
    this._transactionHistory = []
    this._currentDate = new dateInfo;
    this._MAX_DEPOSIT = 5000 
    this._MAX_WITHDRAWAL = 5000 
  }

  deposit(amount){
    if (amount > this._MAX_DEPOSIT) {
      return 'Max deposit reached'
    }
    else {
      this._accountBalance._balance += amount
      let depositDetails = {date: this._currentDate.dateToday(), credit: amount, debit:'', balance: this._accountBalance.showBalance()}
      this._transactionHistory.push(depositDetails)
    }
  }

  withdraw(amount) {
    if (amount > this._MAX_WITHDRAWAL) {
      return 'Withdrawal limit reached'
    }
    else {
      this._accountBalance._balance -= amount
      let withdrawalDetails = {date: this._currentDate.dateToday(), credit:'', debit: amount, balance: this._accountBalance.showBalance()}
      this._transactionHistory.push(withdrawalDetails)
    }
  }

  showStatement() {
    let statement;
    this._transactionHistory.reverse().forEach(transaction => 
    statement = this._topOfStatement += transaction.date +
      ' || '+ transaction.credit +
      ' || '+ transaction.debit +
      ' || '+ transaction.balance +'\n') 
    return statement
  }

}
