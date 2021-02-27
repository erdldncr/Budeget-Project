class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  ///submit budget method
  submitBudgetForm(){
    
  }

}
function eventListeners(){
const budgetForm=document.getElementById('budget-form');
const expenseForm=expenseForm = document.getElementById("expense-form");
const expenseList=expenseForm = document.getElementById("expense-list");

///new instance of Ui Class 
const ui= new UI();


//budget Form submit
budgetForm.addEventListener('submit',function(event){
event.preventDefault()

})
//expense Form submit
expenseForm.addEventListener('submit',function(event){
  event.preventDefault()


})
//expense click
expenseList.addEventListener('click',function(){
  

})


document.addEventListener('DOMContentLoaded',function(){
  eventListeners();
})

}