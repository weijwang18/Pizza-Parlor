# Pizza-Parlor

#### By **Winnie Wang**

#### Week 4 Independent Project

[GitHub Pages]()

## Technologies Used

- HTML/CSS
- JavaScript
- Bootstrap
- JQuery

## Description

Users can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

## Setup/Installation Requirements

- You have to have an internet connection for it to work because Boostrap and JQuery are using a **CDN**.
- Clone this repository to your desktop.
- Navigate to the top level of the directory.
- Open index.html in your browser.

## Tests

**Describe: Pizza()**

Test1: "It should return a Pizza object with three properties for meat toppings, non-meat toppings and size"
Code: const myPizza = new Pizza("Medium", ["Bacon", "Sausage"], ["Onions", "Spinach"])
Expected Output: Pizza { size: "Medium", meatToppings: ["Bacon", "Sausage"],nonMeatToppings: ["Onions", "Spinach"]}

**Describe: Pizza.prototype.calculatePrice**

**Test1: "It should return the base price of a small, medium, or large pizza"**
Code: const myPizza = new Pizza("Medium", ["Bacon", "Sausage"], ["Onions", "Spinach"])
myPizza.calculatePrice()
Expected Output: 5

**Test2: "It should return the total price of a pizza"**
Code: const myPizza = new Pizza("Medium", ["Bacon", "Sausage"], ["Onions", "Spinach"])
myPizza.calculatePrice()
Expected Output: 11

## License

**MIT**

Copyright (c) 2022 **Winnie Wang**
