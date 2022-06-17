//Business logic//

function Pizza(size, meatToppings, nonMeatToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.nonMeatToppings = nonMeatToppings;
}

// meatTopping $2 each, nonMeatToppings $1 each//
Pizza.prototype.calculatePrice = function () {
  let base = 5;
  for (toppings in this.meatToppings) {
    cost += 2;
  }
  for (toppings in this.nonMeatToppings) {
    cost += 1;
  }
};
//Ui logic//
$(document).ready(function () {
  // // function getNonMeatToppings() {
  // let nonMeatSelection = [];
  // $("#nonMeatTopping:checked").each(function () {
  //   nonMeatSelection.push($(this).val());
  // });
  // console.log(nonMeatSelection);
  // // }

  // $("#submit").click(function (event) {
  //   event.preventDefault();
  //   console.log($("input[type=checkbox][name=toppings]:checked").val());
  // });
});
