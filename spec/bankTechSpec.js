describe("bankTech", function(){
  let bank;
  bank = new bankTech();

    describe('balance', function() {
      it('should deposit 500', function(){
        bank.deposit(500)
        expect(bank._balance).toBe(500);
      })
    })
})






