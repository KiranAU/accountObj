class Account{
  constructor(accuntNumber, accountHolder){
	  this.accuntNumber = accuntNumber,
	  this.accountHolder = accountHolder,
	  this.balance = 0
	  }
  
deposit(accuntNumber, amount){
	//debugger;
	document.write(`${this.accountHolder} deposited ${amount}. <br>`);
    this.balance += amount;
	this.getBalance(accuntNumber);
	return this.amount;
}

// withdraw(account, amount)
withdraw(accuntNumber, amount){
	//debugger;
	document.write(`${this.accountHolder} withdrew ${amount}. <br>`);
	//console.log(amount)
	this.balance -= amount;
	this.getBalance(accuntNumber);
	return this.balance;
}

// get balance(account)
getBalance(accuntNumber){
	//debugger;
	document.write(` ${this.accountHolder}'s account balance is ${this.balance}. <br>`);
	//console.log(this.balance);
    return this.balance;
	
}
};

const kiran = new Account(2, "Kiran Uttarkar")
document.write(`-----------------------------------${kiran.accountHolder}------------------------------------------------<br>`);
kiran.deposit(2, 100);
kiran.withdraw(2, 40);
kiran.deposit(2, 300);

const shyam = new Account(3, "Shyam Giri")
document.write(`-----------------------------------${shyam.accountHolder}------------------------------------------------<br>`);
shyam.deposit(3, 100);
shyam.withdraw(3, 30);
shyam.withdraw(3, 10);
shyam.withdraw(3, 5);
