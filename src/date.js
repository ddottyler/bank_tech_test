class dateInfo{
  
  constructor() {
    this._today = new Date();
    this._dd = this._today.getDate();
    this._mm = this._today.getMonth() + 1;
    this._yyyy = this._today.getFullYear();
  }

  dateToday() {
    return `${this._dd}/${this._mm}/${this._yyyy}`
  }

}
