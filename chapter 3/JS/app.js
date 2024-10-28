// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
          let age = 15;
          alert( "I'm" + age + "years old");
          
// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
        let visit= 14;
        alert("You have visited this page" + visit + "times");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
           let birthYear = 2008;
        //    document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:

// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”

let name = prompt("what is your name?");
let product = prompt("which product you buy from this our store?");
let quantity = prompt("Tell us the quantity of "+ product + " you bought!");

document.write(name + "ordered" + quantity + product + "from our store");



