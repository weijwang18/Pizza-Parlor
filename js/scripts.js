//Business logic//

function Pizza(size, meatToppings, nonMeatToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.nonMeatToppings = nonMeatToppings;
}


Pizza.prototype.calculatePrice = function () {
  // base cost//
  let base = 0;
  if (this.size === "Small") {
    base += 4;
  } else if (this.size === "Medium") {
    base += 5;
  } else if (this.size === "Large") {
    base += 6;
  }
  // base cost //
  // meatTopping $2 each, nonMeatToppings $1 each//
  let numbersofMeatToppings = Object.keys(this.meatToppings).length;
  let numbersofNonMeatToppings = Object.keys(this.nonMeatToppings).length;
  let price = numbersofMeatToppings * 2 + numbersofNonMeatToppings + base;
  return price;
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
