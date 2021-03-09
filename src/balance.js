class balance {

  constructor() {
    this._balance = 0;
  }

  deposit(amount){
    this._balance += amount
  }

  withdraw(amount){
    this._balance -= amount
  }

  showBalance(){
    return this._balance  
  }

}