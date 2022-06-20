//Business logic//

function Pizza(size, Toppings, price) {
  this.size = size;
  this.Toppings = Toppings;
  this.price = price;
}

Pizza.prototype.addToppings = function () {
  this.Toppings = { meatToppings: [], nonMeatToppings: [] };
};

Pizza.prototype.addSize = function (size) {
  this.size = size;
};

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
  let numbersofMeatToppings = Object.keys(this.Toppings.meatToppings).length;
  let numbersofNonMeatToppings = Object.keys(
    this.Toppings.nonMeatToppings
  ).length;
  let price = numbersofMeatToppings * 2 + numbersofNonMeatToppings + base;
  this.price = price;
  return price;
};

//Ui logic//
$(document).ready(function () {
  let pizza = new Pizza();

  $("button").click(function (event) {
    event.preventDefault();
    pizza.addToppings();
    $.each($("input:checkbox[name=meattoppings]:checked"), function () {
      pizza.Toppings.meatToppings.push($(this).val());
    });
    $.each($("input:checkbox[name=toppings]:checked"), function () {
      pizza.Toppings.nonMeatToppings.push($(this).val());
    });
    let size = $("input:radio[name=size]:checked").val();
    pizza.addSize(size);
    let name = $("#name").val();
    $("#recipient").text(name + "😉");
    $("#selection").text(
      pizza.Toppings.meatToppings.join(",") +
        "," +
        pizza.Toppings.nonMeatToppings.join(",")
    );
    $("#price").text("$" + pizza.calculatePrice());
    $(".output").show();
  });
});
