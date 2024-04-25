# WHAT DIFFERENCES JAVASCRIPT FROM ANY OTHER PROGRAMMING LANGUAGE?

JavaScript is a **high-level, interpreted programming language** primarily used for front-end web 
development. It is designed to add interactivity and dynamic elements to static web pages, allowing 
developers to create engaging user experiences. Unlike languages that require compilation, JavaScript 
is executed directly by web browsers, making it accessible to users without the need for additional 
installations or plugins.

JavaScript is a versatile language with a wide range of applications beyond web development. It can be 
used for server-side programming (Node.js), mobile app development (React Native, Ionic), and even 
desktop application development (Electron). It features dynamic typing, first-class functions, and 
prototypal inheritance and supports event-driven, asynchronous programming, making it a powerful and 
flexible language for various programming tasks. As one of the cornerstones of modern web development, 
JavaScript has become a fundamental skill for developers and a key technology for building interactive 
and responsive websites and web applications.

## History and Origins of JavaScript

JavaScript, often abbreviated as JS, was created by **Brendan Eich** while he was working at 
**Netscape in 1995**. Originally known as **"Mocha"** and later **"LiveScript"**, it was eventually 
named JavaScript to ride the popularity wave of Java at the time. It was first released as a scripting 
language for Netscape Navigator, one of the early web browsers, to add dynamic and interactive elements 
to static web pages. Subsequently, JavaScript's standardization and adoption by other browsers, such as 
Internet Explorer and Firefox, led to its widespread use across the web.

## Role of JavaScript in Web Development

JavaScript plays a crucial role in web development as a client-side scripting language. It operates 
within the user's web browser and allows developers to create dynamic content, handle user 
interactions, and modify the appearance of web pages in real time. With JavaScript, developers can 
validate user input, perform form submissions without page reloads (AJAX), create animations, manage 
cookies, and interact with web APIs. It enables a more engaging and responsive user experience, making 
web applications feel closer to native desktop software.

## Key Features and Characteristics of JavaScript

1. **Lightweight and Versatile**: JavaScript is a lightweight language that doesn't require 
compilation. It can be easily embedded in HTML and doesn't need additional plugins or installations to 
run, making it highly accessible for developers and end-users alike.

2. **Dynamically Typed**: JavaScript is dynamically typed, meaning variables can hold values of any 
data type. This flexibility allows for quicker development, but it also requires careful handling to 
avoid runtime errors.
 
3. **Prototypal Inheritance**: JavaScript uses a prototypal inheritance model, where objects inherit 
properties and behaviors directly from other objects. This provides a more flexible approach to 
object-oriented programming compared to classical inheritance used in languages like Java.
 
4. **Event-Driven and Asynchronous**: JavaScript is event-driven, meaning it responds to user 
interactions or other events on a web page. It also supports asynchronous programming, allowing certain 
tasks to be executed without blocking the main thread, leading to smoother user experiences.

5. **First-class Functions**: Functions in JavaScript are first-class citizens, which means they can be 
assigned to variables, passed as arguments to other functions, or returned from functions. This feature 
is instrumental in enabling functional programming paradigms.

6. **Rich Ecosystem**: JavaScript has a vast ecosystem with numerous libraries and frameworks like 
React, Angular, and Vue.js, which enhance productivity and allow developers to build complex 
applications more efficiently.
 
## Differences Between JavaScript and Other Programming Languages

### Syntax and Structure

JavaScript's Syntax Compared to Languages like Python, Java, and C++: JavaScript's syntax differs 
significantly from languages like Python, Java, and C++. Let's look at a simple code example to 
illustrate these differences.

In JavaScript, we define functions using the **function** keyword and variables using **var**. The 
syntax includes curly braces **{}** to define code blocks and uses semicolons **;** to separate 
statements.

```js
function greet(name) {
    return "Hello, " + name + "!";
}

var message = greet("Simran");
console.log(message);
```

Python uses the **def** keyword for function definitions and the indentation is used to indicate code 
blocks, removing the need for braces. The syntax is more minimalist and readable compared to JavaScript.

```py
def greet(name):
    return "Hello, " + name + "!"

message = greet("Simran")
print(message)
```

In Java, functions are part of classes, and the keyword **public** denotes the visibility of the 
method. Variables require explicit data type declarations (static typing), and code blocks use curly 
braces.

```java
public class Main {
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }

    public static void main(String[] args) {
        String message = greet("Simran");
        System.out.println(message);
    }
}
```

#### Scripting Nature of JavaScript vs. Compiled Languages

The scripting nature of JavaScript allows it to be executed directly by the web browser or JavaScript 
engine without the need for a compilation step. Let's compare this with a compiled language like Java.

- **JavaScript**: As a scripting language, JavaScript can be run directly in the browser without any 
pre-compilation. For example, when you open an HTML file containing JavaScript code in a browser, the 
browser interprets and executes the JavaScript code line-by-line.

- **Java**: Java is a compiled language, and its source code needs to be compiled into bytecode before 
execution.
 
### Data Types and Variables

JavaScript's Dynamically Typed Nature: JavaScript is a dynamically typed language, meaning that 
variable types are determined at runtime based on the assigned values. Unlike statically typed 
languages where variable types are explicitly declared during variable declaration, JavaScript allows 
variables to hold values of any data type. Let's see an example to illustrate this.

```js
var message = "Hello, World!";  // 'message' is a string type
console.log(message);

message = 42;  // 'message' now holds an integer value
console.log(message);

message = true;  // 'message' is now a boolean
console.log(message);
```

In JavaScript, the variable **message** is initially assigned a string value. Later in the code, we 
reassign it to an integer value and then a boolean value. JavaScript doesn't enforce a fixed data type 
for the **message** variable, allowing it to change during runtime.

#### Comparison with Statically Typed Languages

Statically typed languages, such as Java and C++, require explicit data type declarations for variables 
when they are declared. Once the data type is assigned, it cannot be changed during the program's 
execution. Let's see an example in Java to contrast this with JavaScript.

```java
public class Main {
    public static void main(String[] args) {
        String message = "Hello, World!";  // 'message' is declared as a String
        System.out.println(message);

        message = 42;  // This will result in a compilation error in Java
        System.out.println(message);
    }
}
```

In Java, the variable **message** is explicitly declared as a **String**. If we attempt to reassign it 
to an integer value, as in the JavaScript example, the Java compiler will raise an error during the 
compilation process. This is because Java is statically typed, and the data type of a variable is fixed 
once it is declared.

### Scope and Hoisting

In JavaScript, variables have either function scope or block scope.

- **Function Scope**: Variables declared inside a function are only accessible within that function and 
are not visible outside of it. This means that variables defined within a function have local scope and 
are not accessible from other parts of the code. For example:

```js
function exampleFunction() {
    var x = 10; // 'x' is a variable with function scope
    console.log(x);
}

exampleFunction(); // Output: 10
console.log(x); // Error: 'x' is not defined
```

- **Block Scope**: Starting from ECMAScript 6 (ES6), JavaScript introduced block scope with the 
introduction of let and const keywords. Variables declared with let and const are block-scoped, meaning 
they are only accessible within the block of code where they are defined (e.g., inside a loop or an if 
statement). For example:

```js
if (true) {
    let y = 5; // 'y' is a variable with block scope
    const z = 15; // 'z' is a constant with block scope
    console.log(y, z);
}

console.log(y); // Error: 'y' is not defined
console.log(z); // Error: 'z' is not defined
```
#### Contrasting with Languages Featuring Lexical Scoping

JavaScript's function scope and block scope are based on lexical scoping, also known as static scoping. 
Lexical scoping means that the scope of a variable is determined by its location in the source code 
during the lexing phase (the phase where the code is read and tokenized).

In languages featuring lexical scoping, like JavaScript, the scope of a variable is defined by its 
surrounding function or block of code. This allows for more predictable scoping behavior, as variables 
can be accessed only within their enclosing scope and are not affected by the runtime flow of the 
program. In contrast, languages with dynamic scoping, like some older programming languages, determine 
the scope of a variable based on the call stack or the current execution context, which can lead to 
less predictable behavior and make it challenging to reason about variable scope.

### Asynchronous Programming

Asynchronous programming in JavaScript allows for executing tasks concurrently without blocking the 
main thread, making it suitable for handling time-consuming operations like network requests or file 
reading. Two common approaches for managing asynchronous operations in JavaScript are callbacks and 
promises.

- **Callbacks**: Callbacks are functions passed as arguments to other functions to be executed later 
once the asynchronous task is completed. They help ensure that a certain operation is performed only 
after the asynchronous task finishes. However, nested callbacks can lead to callback hell, making code 
hard to read and maintain. Example:

```js
function fetchDataFromServer(callback) {
    setTimeout(function () {
        console.log("Data fetched successfully!");
        callback();
    }, 2000);
}

function processData() {
    console.log("Data processing completed!");
}

fetchDataFromServer(processData);
```

- **Promises**: Promises were introduced in ES6 as a more elegant solution to handle asynchronous 
operations. A promise represents a future value that can be resolved (successful) or rejected (failed) 
after the asynchronous task finishes. This allows chaining multiple asynchronous operations and 
handling errors in a cleaner way. Example:

```js
function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Data fetched successfully!");
            resolve();
        }, 2000);
    });
}

function processData() {
    console.log("Data processing completed!");
}

fetchDataFromServer()
    .then(processData)
    .catch(error => console.error(error));
```

### Synchronous Programming

Let's consider an example of synchronous programming in JavaScript.

```js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function calculate(a, b, c) {
    try {
        const sum = add(a, b);
        const product = multiply(sum, c);
        const result = divide(product, 2);
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

const a = 10;
const b = 5;
const c = 3;

const result = calculate(a, b, c);
console.log("Result:", result);
```

In this synchronous example, we have three functions: **add, multiply, and divide**, that perform basic 
arithmetic operations. The **calculate** function takes three numbers, performs the arithmetic 
operations synchronously, and returns the final result.

If the **divide** function encounters a division by zero, it throws an error, which is caught and 
logged in the **calculate** function's catch block.

This example demonstrates synchronous programming, where each operation must be completed before moving 
on to the next one. If any operation takes a long time to finish, it can cause delays in the entire 
program's execution.

### Standard Library and Frameworks

JavaScript has a rich and diverse ecosystem of libraries and frameworks that greatly enhance its 
capabilities and make development more efficient. Some popular libraries and frameworks include:

- **React.js**: A widely used front-end library for building user interfaces. It allows developers to 
create reusable UI components, making it easier to manage complex applications.

- **Angular**: A comprehensive front-end framework developed by Google. It provides a full set of tools 
for building complex, feature-rich applications. 

- **Vue.js**: A progressive front-end framework that is easy to integrate into existing projects. It 
offers reactive data binding and component-based architecture.

- **Node.js**: A server-side JavaScript runtime environment that allows developers to build scalable 
and efficient server applications.

- **Express.js**: A minimalist and flexible server-side framework built on top of Node.js. It 
simplifies the creation of server-side applications and APIs.

- **Redux**: A state management library that works seamlessly with React to manage application state 
and make state changes predictable.

- **Axios**: A popular library for making HTTP requests from the browser or Node.js.
 
## Advantages of JavaScript

- **Versatility and Browser Compatibility**: JavaScript's versatility enables it to be used in various 
environments, not just for web development but also for server-side programming (Node.js), mobile app 
development (React Native, Ionic), and desktop app development (Electron). This flexibility makes it a 
powerful language that can address multiple development needs.

- **Easy Integration with HTML and CSS**: JavaScript seamlessly integrates with HTML and CSS, making it 
effortless to add dynamic behavior and interactivity to web pages. By manipulating the DOM (Document 
Object Model), JavaScript can update page content, respond to user events, and create engaging user 
interfaces.

- **Abundant Third-Party Libraries and Tools**: JavaScript has a vast ecosystem with a wide range of 
third-party libraries and tools that extend its capabilities and make development more efficient. 
Developers can leverage these libraries for various tasks such as data visualization, animation, 
testing, and more. 

## Conclusion

JavaScript's unique characteristics, such as its C-style syntax, dynamic typing, and event-driven, 
asynchronous nature, set it apart from other programming languages. Its versatility extends beyond web 
development, enabling server-side, mobile, and desktop applications. JavaScript's seamless integration 
with HTML and CSS, coupled with a vast array of third-party libraries and frameworks, enhances 
development efficiency and user experiences. As a cornerstone of modern programming, JavaScript's 
significance cannot be overstated. Its role in web development remains paramount, providing interactive 
and dynamic web experiences. Embrace JavaScript's power and explore its endless possibilities to unlock 
the full potential of your projects and contribute to this vibrant and thriving community.

# WHAT ARE SOME JS DATA TYPES?

JavaScript is a **dynamically typed** (also called loosely typed) scripting language. In JavaScript, 
variables can receive different data types over time.

The latest ECMAScript standard defines eight data types Out of which seven data types are 
**Primitive (predefined)** and one complex or **Non-Primitive**.

## Primitive Data Types

The predefined data types provided by JavaScript language are known as primitive data types. Primitive 
data types are also known as in-built data types.

- **Number**: JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. 
Unlike other programming languages, you don’t need int, float, etc to declare different numeric values.

- **String**: JavaScript Strings are similar to sentences. They are made up of a list of characters, 
which is essentially just an “array of characters, like “Hello GeeksforGeeks” etc. 

- **Boolean**: Represent a logical entity and can have two values: true or false.

- **Null**: This type has only one value that is *null*.

- **Undefined**: A variable that has not been assigned a value is *undefined*.
 
- **Symbol**: Symbols return unique identifiers that can be used to add unique property keys to an 
object that won’t collide with keys of any other code that might add to the object.
 
- **BigInt**: BigInt is a built-in object in JavaScript that provides a way to represent whole numbers 
larger than 253-1.
 
## Non-Primitive Data Types

The data types that are derived from primitive data types of the JavaScript language are known as 
non-primitive data types. It is also known as derived data types or reference data types.

- **Object**: It is the most important data type and forms the building blocks for modern JavaScript. 

## JavaScript Primitive Data Types Examples

- **Number**: The number type in JavaScript contains both integer and floating-point numbers. Besides 
these numbers, we also have some ‘special-numbers’ in javascript that are: ‘Infinity’, ‘-Infinity’, and 
‘NaN’. Infinity basically represents the mathematical ‘?’. The ‘NaN’ denotes a computational error.

```js
let num = 2; // Integer 
let num2 = 1.3; // Floating point number
let num3 = Infinity; // Infinity
let num4 = 'something here too'/2; // NaN
```

- **String**: A String in javascript is basically a series of characters that are surrounded by quotes. 
There are three types of quotes in Javascript, which are:

```js
let str = "Hello There";
let str2 = 'Single quotes works fine';
let phrase = `can embed ${str}`;
```

There’s no difference between ‘single’ and “double” quotes in javascript. Backticks provide extra 
functionality as with their help of them we can embed variables inside them.

```js
let name = "Mukul";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, Mukul!
```

- **Boolean**: The boolean type has only two values: true and false. This data type is used to store 
yes/no values: true means “yes, correct”, and false means “no, incorrect”.

```js
let isCoding = true; // yes
 let isOld = false; // no
```

- **Null**: The special null value does not belong to any of the default data types. It forms a 
separate type of its own which contains only the null value.

```js
let age = null;
```

The ‘null’ data type basically defines a special value that represents ‘nothing’, ’empty’, or ‘value 
unknown’. Undefined Just like null, Undefined makes its own type. The meaning of undefined is ‘value is 
not assigned’.

```js
let x;
console.log(x);  // undefined
```

- **Symbol**: Symbols are new primitive built-in object types introduced as part of ES6. Symbols return 
unique identifiers that can be used to add unique property keys to an object that won’t collide with 
keys of any other code that might add to the object. They are used as object properties that cannot be 
recreated. It basically helps us to enable encapsulation or information hiding.

```js
let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks")
  
// Each time Symbol() method 
// is used to create new global Symbol
console.log(symbol1 == symbol2); // False
```

- **BigInt**: BigInt is a built-in object in JavaScript that provides a way to represent whole numbers 
larger than 253-1. The largest number that JavaScript can reliably represent with the Number primitive 
is 253-1, which is represented by the MAX_SAFE_INTEGER constant.

```js
let bigBin = BigInt("0b1010101001010101001111111111111111");
// 11430854655n
console.log(bigBin);
```

## JavaScript Non-Primitive Data Types Examples

- **Object**: JavaScript objects are fundamental data structures used to store collections of data. 
They consist of key-value pairs and can be created using curly braces {} or the new keyword. 
Understanding objects is crucial, as everything in JavaScript is essentially an object.

Object creation using the “object constructor” syntax:

```js
let person = new Object(); 
```

Object creation using the “object literal” syntax:

```js
let person = {};
```

Both these methods are correct, though it’s totally your call what to choose. We can also put 
properties inside an Object.

# WHICH ARE THE THREE FUNCTIONS OF STRING IN JS?

The JavaScript string is a data type used to convey information as text, which differs from numerical 
data types like int. Specifically, an int value can only be a number, but strings can contain any 
character. Because of this, they are commonly used in software development across different industries 
and languages.

Because of the popularity and need for string data, JavaScript offers many different methods for 
interacting with and modifying strings. In fact, there are over 30 distinct methods for modifying and 
manipulating string values.

## What are JavaScript string methods?

In many languages, strings are objects and thus have several properties and methods to build on their 
functionality. In JavaScript, however, strings are a primitive data type and thus do not have any 
built-in methods or properties. Despite this fact, JavaScript does support several methods and a couple 
of properties on strings.

Because JavaScript treats strings as objects when methods or properties are executed, they still have 
the ability to be built up. This ability is due to the string object in the JavaScript library or 
framework, though it’s not intended for creating string objects. Creating string objects results in 
slower processing and potentially errant results, so use them cautiously.

## How to Use String Methods in JavaScript

Truthfully, using string methods is relatively easy to do. However, understanding what's happening is a 
different topic. Let’s clarify this with an example. After all, using a string method is simply a 
matter of understanding the syntax.

With that in mind, let’s look at a code example of the syntax below.

```js
let str = “Doctor Who”;
str.someRandomMethod();
```

That is the bare bones of every string method. It starts with a variable holding a primitive string 
value. You can then chain the desired method to the string variable using the dot notation and finish 
it off with parenthesis and a semicolon. Here is a code snippet showing how to use the **trim()** 
method.

```js
let str = “Yes, but Doctor Who?”;
str.trim();
/*Would return the string “Yes, but Doctor Who?”*/
```

Simple enough, right? Well, what if that method requires a parameter? In that case, the method will 
accept some criteria on what to do with the string value. This behavior changes things a little.

Let's look at a simple example of a method with parameters. The code below does the same as the code 
above, removing any whitespace from a string. Only this time, it's done using the **replace()** method.

The **replace** method accepts two parameters, the first is what the string method should look for, and 
the second is the value to replace with the target.

```js
let str = “I’m a Timelord from the planet Gallifrey.”;
str.replace(/\s/g,'');\
/*Would return the string “I’maTimelordfromtheplanetGallifrey.”*/
```

The above code uses a regular expression that equates to “all-white space, inclusive”, which tells 
JavaScript to remove all occurrences of any white space.

Now that we've reviewed what string methods are and how to use them let's look at a comprehensive list 
of string methods available in JavaScript.

## JavaScript String Methods & Examples

This section will review some of the more popular JavaScript string methods. We've also included this 
cheatsheet below that you can keep as a handy reference.

![Alt text](https://blog.hubspot.com/hs-fs/hubfs/image-png-Jan-23-2024-02-23-37-6682-PM.png?width=1536&height=1536&name=image-png-Jan-23-2024-02-23-37-6682-PM.png "String Methods")

For these examples, let's use the following string:

```js
let str = “I’m a Timelord from the planet Gallifrey.”;
```

1. **Uppercase Method: toUpperCase()**: The ***toUpperCase()** method returns the value of the string 
converted to uppercase. This method does not affect the value of the string itself since JavaScript 
strings are immutable.

```js
str.toUpperCase();
/*Would return the string, 
"I’M A TIMELORD FROM THE PLANET GALLIFREY."*/
```

2. **Concat Method: concat()**: The **concat()** method of String values concatenates the string 
arguments to this string and returns a new string.

```js
str.concat(” I’m The Doctor, look me up!”);
/*Would return “I’m a Timelord from the planet Gallifrey. I’m The Doctor, look me up!”*/
```

3. **Trim Method: trim()**: the **trim()** method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

```js
const str = "   Welcome to HubSpot    ";
const newMessage = str.trim();

console.log(newMessage);

/*Would return: Welcome to HubSpot*/
```

# WHAT IS A CONDITIONAL?

**JavaScript Conditional statements** allow you to execute specific blocks of code based on conditions. 
If the condition meets then a particular block of action will be executed otherwise it will execute 
another block of action that satisfies that particular condition.

There are several methods that can be used to perform Conditional Statements in JavaScript:

- **if statement**: Executes a block of code if a specified condition is true.

- **else statement**: Executes a block of code if the same condition of the preceding if statement is 
false.

- **else if statement**: Adds more conditions to the if statement, allowing for multiple alternative 
conditions to be tested.

- **switch statement**: Evaluates an expression, then executes the case statement that matches the 
expression’s value.

- **ternary operator (conditional operator)**: Provides a concise way to write if-else statements in a 
single line.

- **Nested if else statement**: Allow for multiple conditions to be checked in a hierarchical manner.

## JavaScript Conditional statements Examples:

1. **Using if Statement**: The if statement is used to evaluate a particular condition. If the 
condition holds true, the associated code block is executed.

```js
let num = 20;

if (num % 2 === 0) {
    console.log("Given number is even number.");
}

if (num % 2 !== 0) {
    console.log("Given number is odd number.");
};
// Given number is even number.
```

In this example, we are using the if statement to find given number is even or odd. This JavaScript 
code determines if the variable `num` is even or odd using the modulo operator `%`. If `num` is 
divisible by 2 without a remainder, it logs “Given number is even number.” Otherwise, it logs “Given 
number is odd number.”

2. **Using if-else Statement**: The if-else statement will perform some action for a specific 
condition. Here we are using the else statement in which the else statement is written after the if 
statement and it has no condition in their code block.

```js
let age = 25;

if (age >= 18) {
    console.log("You are eligible of driving licence")
} else {
    console.log("You are not eligible for driving licence")
};
// You are eligible of driving licence
```

In this example, we are using if-else conditional statement to check the driving licence eligibility 
date. This JavaScript code checks if the variable `age` is greater than or equal to 18. If true, it 
logs “You are eligible for a driving license.” Otherwise, it logs “You are not eligible for a driving 
license.” This indicates eligibility for driving based on age.

3. **else if Statement**: The else if statement in JavaScript allows handling multiple possible 
conditions and outputs, evaluating more than two options based on whether the conditions are true or 
false.

```js
const num = 0;

if (num > 0) {
    console.log("Given number is positive.");
} else if (num < 0) {
    console.log("Given number is negative.");
} else {
    console.log("Given number is zero.");
};
// Given number is zero.
```

This JavaScript code determines whether the constant `num` is positive, negative, or zero. If `num` is 
greater than 0, it logs “Given number is positive.” If `num` is less than 0, it logs “Given number is 
negative.” If neither condition is met (i.e., `num` is zero), it logs “Given number is zero.”

4. **Using Switch Statement (JavaScript Switch Case)**: As the number of conditions increases, you can 
use multiple else-if statements in JavaScript. but when we dealing with many conditions, the switch 
statement may be a more preferred option.

```js
const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer science engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}

console.log(`Student Branch name is : ${Branch}`);
// Student Branch name is : Mechanical engineering
```

In this example, we find a branch name based on the student’s marks, this switch statement assigns a 
specific engineering branch to the variable Branch. The output displays the student’s branch name. This 
JavaScript code assigns a branch of engineering to a student based on their marks. It uses a switch 
statement with cases for different mark ranges. The student’s branch is determined according to their 
marks and logged to the console.

5. **Using Ternary Operator ( ?:)**: The conditional operator, also referred to as the ternary operator 
(?:), is a shortcut for expressing conditional statements in JavaScript.

```js
let age = 21;

const result =
    (age >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";

console.log(result);
//You are eligible to vote.
```

In this example, we use the ternary operator to check if the user’s age is 18 or older. It prints 
eligibility for voting based on the condition. This JavaScript code checks if the variable `age` is 
greater than or equal to 18. If true, it assigns the string “You are eligible to vote.” to the variable 
`result`. Otherwise, it assigns “You are not eligible to vote.” The value of `result` is then logged to 
the console.

6. **Nested if…else**: Nested if…else statements in JavaScript allow us to create complex conditional 
logic by checking multiple conditions in a hierarchical manner. Each if statement can have an 
associated else block, and within each if or else block, you can nest another if…else statement. This 
nesting can continue to multiple levels, but it’s important to maintain readability and avoid excessive 
complexity.

```js
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
    if (temperature > 30) {
        console.log("It's a hot day!");
    } else if (temperature > 20) {
        console.log("It's a warm day.");
    } else {
        console.log("It's a bit cool today.");
    }
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
};
// It's a warm day.
```

This example demonstrates how nested if…else statements can be used to handle different scenarios based 
on multiple conditions. n this example, the outer if statement checks the weather variable. If it’s 
“sunny,” it further checks the temperature variable to determine the type of day it is (hot, warm, or 
cool). Depending on the values of weather and temperature, different messages will be logged to the 
console.

## Conditional Statements in JavaScript Use-Cases:

1. **JavaScript if-else**: JavaScript **if-else** or conditional statements will perform some action 
for a specific condition.

2. **Control Statements in JavaScript**: Control Statements are used to control the flow of the program 
with the help of conditional statements.

# WHAT IS A TERNARY OPERATOR?

A ternary operator is a conditional operator in JavaScript that evaluates a conditional expression and 
returns either a truthy or falsy value.

To understand how this works, let's take a closer look at its syntax below:

```js
conditionalExpression ? truthyValue : falsyValue
```

From the syntax above, the **condional expression** is the expression that serves as the evaluation 
point, determining either a truthy or falsy value.

Following the **?** (question mark), the value provided is returned in case the expression evaluates to 
truthy, whereas the value following the **:** (colon) is returned if the expression results in a falsy 
outcome.

The truthyValue and falsyValue can be anything in JavaScript. It can encompass various entities such as 
functions, values stored in variables, objects, numbers, strings, and more. The ternary operator grants 
you the flexibility to return any desired value, offering versatility in your code.

## How to Use the Ternary Operator

Now that we've examined the syntax and its functionality, let's explore how to use the ternary operator 
to deepen our understanding.

Consider this scenario: we're building a gaming platform that only allows users that are aged 18 and 
above. We'll design a function to check a user's age. If they're under 18, they'll be denied access; 
otherwise, they'll gain entry to the platform.

```js
function canAccessPlatform(age) {
  const shouldAccess = age >= 18 ? true : false;

  return shouldAccess;
}
```

From the code snippet above, we created a function, **canAccessPlatform**, which evaluates whether a 
user, represented by their **age** parameter, meets the requirement to access the platform.

It utilizes a ternary operator to determine if the age is 18 or older, assigning **true** to 
**shouldAccess** if the condition is met, and **false** otherwise. Finally, it returns the value of 
**shouldAccess**, indicating whether the user can access the platform or not.

If the age is 18 or older, the expression becomes true, so the operator returns true after the **?**. 
Otherwise, it returns false. This result is saved in a variable and then returned from the function.

While this basic use case simplifies code and improves readability by replacing unnecessary if-else 
blocks, it's important to use it sparingly to avoid cluttering and complicating your code. Later, we'll 
discuss best practices for using the ternary operator.

Here's another example illustrating the use of the ternary operator. We'll create a function to 
determine whether a number is even or odd. Check out the code snippet below:

```js
function checkEvenOrOdd(number) {
  const result = number % 2 === 0 ? "even" : "odd";
  return result;
}

// Usage:
console.log(checkEvenOrOdd(4)); // Output: "even"
console.log(checkEvenOrOdd(7)); // Output: "odd"
```

From the code snippet above:

- We define a function **checkEvenOrOdd** that takes a **number** parameter.

- Inside the function, we use the ternary operator to check if the number is even or odd. 

- If the number modulo 2 equals 0 (meaning it's divisible by 2 with no remainder), then the condition 
evaluates to true, and the string "even" is assigned to the **result** variable.
 
- If the condition evaluates to false (meaning the number is odd), the string "odd" is assigned to 
**result**.
  
- Finally, the function returns the value of **result**, which indicates whether the number is even or 
odd.
 
This code shows how the ternary operator quickly checks if a number is even or odd, making the code 
easier to read and understand.

## How to Refactor if-else Statements to Ternary Operator
 
An advantage of the ternary operator is avoiding unnecessary if-else blocks, which can complicate code 
readability and maintenance. In this section, we'll refactor some if-else statements into ternary 
operations, providing a clearer understanding of how to use ternary operators effectively.

Let's start with our first example:

```js
function decideActivity(weather) {
  let activity;

  if (weather === "sunny") {
    activity = "go out";
  } else {
    activity = "stay in";
  }

  console.log(activity);
}

// Usage
console.log(decideActivity("raining")); // Output: "stay in"
console.log(decideActivity("snowing")); // Output: "stay in"
console.log(decideActivity("sunny")); // Output: "go out"
```

This function, **decideActivity**, takes a weather parameter and determines the appropriate activity 
based on the **weather** condition.

If the weather is "sunny", it suggests to "go out". Otherwise, it advises to "stay in". When we call 
the function with different weather conditions like "raining" or "snowing", it outputs the 
corresponding activity recommendation using **console.log()**.

For instance, calling **decideActivity("raining")** will output "stay in". Similarly,    
**decideActivity("snowing")** also outputs "stay in". When **decideActivity("sunny")** is called, it 
outputs "go out". This straightforward function helps decide on activities based on the weather 
condition provided.

Now, we can refactor these blocks of code to make them look simpler and neater. Let's see how to do 
that below:

```js
function decideActivity(weather){
   const activity = weather === "sunny" ? "go out" ? "stay in";
   
   console.log(activity)

}

// Usage
console.log(decideActivity("raining")); // Output: "stay in"
console.log(decideActivity("snowing")); // Output: "stay in"
console.log(decideActivity("sunny")); // Output: "go out"
```

From the code sample above, this function, **decideActivity**, uses the ternary operator to quickly 
determine the activity based on the weather condition. It checks if the weather is "sunny" and assigns 
"go out" if true, otherwise "stay in".

We've simplified the if-else statements into a one-liner ternary operator. This makes our code cleaner, 
clearer, and easier to read.

Let take a look at another example:

```js
function checkNumber(number) {
  let result;
  if (number > 0) {
    result = "positive";
  } else {
    result = "non-positive";
  }
  return result;
}

// Usage
console.log(checkNumber(5)); // Output: "positive"
console.log(checkNumber(-2)); // Output: "non-positive"
```

Let's explain what the code above is doing:

- **Function Definition**: We begin by defining a function named **checkNumber** that takes a single 
parameter called **number**.

- **Variable Declaration**: Inside the function, we declare a variable named **result** without 
assigning any value to it yet. This variable will store the result of our check.

- **Conditional Statement (if-else)**: We have a conditional statement that checks whether the 
**number** parameter is greater than 0.

- If the condition is true (meaning the number is positive), we assign the string "positive" to the 
**result** variable.
 
- If the condition is false (meaning the number is not positive, meaning it is either negative or 
zero), we assign the string "non-positive" to the **result** variable.

- **Return Statement**: Finally, we return the value stored in the **result** variable.

- **Function Calls**: We then call the **checkNumber** function twice with different arguments: 5 and 
-2.

When we call **checkNumber(5)**, the function returns "positive", which is then logged to the console.

Similarly, when we call **checkNumber(-2)**, the function returns "non-positive", which is again logged 
to the console.

This function efficiently determines whether a number is positive or non-positive and provides the 
appropriate result based on the condition.

Let's simplify and improve the code by rewriting it using a ternary operator:

```js
function checkNumber(number) {
  const result = number > 0 ? "positive" : "non-positive";
  return result;
}

// Usage
console.log(checkNumber(5)); // Output: "positive"
console.log(checkNumber(-2)); // Output: "non-positive"
```

This code, using the ternary operator, feels more concise and elegant. It efficiently determines if a 
number is positive or non-positive, making the code cleaner and easier to understand. When we call 
**checkNumber(5)**, it returns "positive",  while **checkNumber(-2)** returns "non-positive". Overall, 
the ternary operator enhances the code's readability.

## How to Chain Ternary Operators

When dealing with conditional checks, sometimes a single condition isn't enough. In such cases, we use 
'else-if' statements alongside 'if/else' to incorporate multiple conditions.

Let's explore an example below:

```js
function checkNumber(number) {
  let message;

  if (number > 0) {
    message = "Positive";
  } else if (number === 0) {
    message = "Zero";
  } else {
    message = "Negative";
  }

  return message;
}

// Usage
console.log(checkNumber(5)); // Output: "Positive"
console.log(checkNumber(0)); // Output: "Zero"
console.log(checkNumber(-3)); // Output: "Negative"
```

This code above defines a function called **checkNumber** that takes a **number** parameter and 
determines its status (positive, zero, or negative). It utilizes an if-else block with one else-if 
statement to evaluate the number's value. If the number is greater than 0, it's considered positive and 
if it's equal to 0, it's zero. Otherwise, it's negative. The function returns the result.

Let's refactor this code using a ternary operator to achieve the same functionality.

```js
function checkNumber(number) {
  return number > 0 ? "Positive" : number === 0 ? "Zero" : "Negative";
}

// Usage
console.log(checkNumber(5)); // Output: "Positive"
console.log(checkNumber(0)); // Output: "Zero"
console.log(checkNumber(-3)); // Output: "Negative"
```

In the first ternary operator:

- The first part **number > 0** checks if the number is greater than 0.

- If it's true, the expression returns "Positive".

In the second ternary operator (chained):

- If the first condition is false (meaning the number is not greater than 0), it moves to the next part 
of the expression: **number === 0**.

- This part checks if the number is equal to 0.
 
- If it's true, the expression returns "Zero".

And the default value:

- If neither of the above conditions is true (meaning the number is not greater than 0 and not equal to 
0), it defaults to the last part of the expression: **"Negative"**.

- This part acts as the default value if none of the preceding conditions are met.

In summary, the chained ternary operator evaluates multiple conditions in a single line of code. It 
checks each condition sequentially, and the first condition that evaluates to true determines the 
result of the entire expression. This allows for concise and efficient conditional logic.

## Best Practices when Using the Ternary Operator

1. **Keep it simple and readable**: Write concise expressions that are easy to understand at a glance. 
Avoid nesting too many ternary operators or writing overly complex conditions.

2. **Use for simple assignments**: Ternary operators are ideal for simple assignments where there are 
only two possible outcomes based on a condition. For more complex scenarios, consider using **if/else** 
statements.

3. **Know when to use it**: Use the ternary operator when you need to perform a simple conditional 
check and assign a value based on the result. It's particularly useful for assigning default values or 
determining the value of a variable based on a condition.

4. **Test thoroughly**: Test your code thoroughly to ensure that the ternary operator behaves as 
expected under different conditions. Check for edge cases and validate the correctness of the assigned 
values.

5. **Avoid nested ternaries**: While chaining ternaries is possible, excessive nesting can lead to code 
that is difficult to read. Prefer clarity and consider using **if/else** for complex conditions.

6. **Keep ternaries short**: Aim to keep ternary expressions short and concise. Long ternaries can be 
difficult to read and understand, leading to code maintenance challenges.

These best practices outline guidelines for effectively utilizing the ternary operator. While they are 
not strict rules, they offer valuable insights to enhance the clarity and readability of your code.

# WHAT IS THE DIFFERENCE BETWEEN A FUNCTION EXPRESSION AND A FUNCTION DECLARATION?

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar 
to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to 
qualify as a function, it should take some input and return an output where there is some obvious 
relationship between the input and the output. To use a function, you must define it somewhere in the 
scope from which you wish to call it.

When talking about functions in JavaScript, you would often hear function declarations and function 
expressions. Though these approaches are almost similar, they have notable differences.

## Function Declaration

To declare a function, you use the **function** keyword and specify a name for the function. For 
example:

```js
function generateIntro(name) {
  return `Hi, my name is ${name}`
}

const dillion = generateIntro("Dillion")
console.log(dillion)

// Hi, my name is Dillion
```

Here, we have "declared" a function called **generateIntro**. You see we use the **function** keyword 
followed by the name of the function: "generateIntro"

## Function Expression

Here, you create a function expression and assign it to a variable that can be called. You can do this 
in two ways.

### Function Expressions with the **function** keyword

One way to do this is to use the function keyword without a name, which makes it an anonymous function. 
Here's how:

```js
const generateIntro = function(name) {
  return `Hi, my name is ${name}`
}

const dillion = generateIntro("Dillion")
console.log(dillion)

// Hi, my name is Dillion
```

As you see here, we have the **function** keyword without a name for the function. This makes it an 
expression, which you have to assign to a variable (as we have done to **generateIntro** here).

If we use the function keyword without a name, we create a function expression, which we have to assign 
to a variable, else we get an error. Here's what I mean:

```js
function(name) {
  return `Hi, my name is ${name}`
}

// SyntaxError: Function statements require a function name
```

We get an error: **SyntaxError: Function statements require a function name**. Without assigning it to 
a variable, JavaScript assumes it is a statement, and as the error says, you must provide a function 
name.

But when you assign it to a variable, you assign the expression, and when you call the variable 
(**variable()**), it will execute the logic of the function expression assigned to it.

### Arrow function expressions

You can also create function expressions with arrow functions. Arrow functions, introduced in ES6 allow 
you to write functions in a short manner. But arrow functions cannot be declared; they can only be 
expressed. Here's an example:

```js
const generateIntro = (name) => {
  return `Hi, my name is ${name}`
}

const dillion = generateIntro("Dillion")
console.log(dillion)

// Hi, my name is Dillion
```

The arrow function here is **(args) => {...}**. This is a function expression that we have assigned to 
**generateIntro**.

## Function Declarations vs Function Expressions

So what's the difference between these ways of creating functions and why does it matter?

It matters because these functions have different behaviors. And depending on what you want to achieve, 
one may be preferred over the other.

### Expressed functions cannot be used before initialization

You can use a declared function before the line it was initialized. Here's what I mean:

```js
const result = sum(20, 50)
console.log(result)

console.log("hello")

function sum(num1, num2) {
  return num1 + num2
}

// 70
// "hello"
```

As you see here, we used **sum** on line 1, which is actually before the line was declared. What 
happens here is hoisting. **sum** is hoisted to the top of the code before the whole code is executed. 
This makes **sum** accessible before the line where it was actually created in the code.

When it comes to hoisting, **all functions and variables are hoisted**. But, functions created with 
function expressions cannot be "used" before their initialization.

Let's see an example using a function expression created with the **function** keyword:

```js
const result = sum(20, 50)
console.log(result)

console.log("hello")

const sum = function(num1, num2) {
  return num1 + num2
}

// ReferenceError: Cannot access 'sum' before initialization
```

We get an error: **ReferenceError: Cannot access 'sum' before initialization**. We get this error 
because when you declare variables with **let** or **const** (like we did for **sum** here), they are 
hoisted, but without a default initialization. 

Let's say we create the variable with **var** instead:

```js
const result = sum(20, 50)
console.log(result)

console.log("hello")

var sum = function(num1, num2) {
  return num1 + num2
}

// TypeError: sum is not a function
```

Now we get a new error: **TypeError: sum is not a function**. Although **var** variables are hoisted, 
they are hoisted with a default initialization of **undefined**. So attempting to call it like a 
function, that is **undefined()**, throws the error that "sum is not a function".

The same error would occur if it were an arrow function.

Therefore, **only declared functions can be used before initialization**.

### Expressed functions need to be assigned to be used later

With declared functions, you already have the name: **function name**.... So you can use the function 
later: **name()**. But with function expressions, there's no name as we saw. It would be impossible to 
use such a function later unless we assigned it to a variable:

```js
const printName = function(firstname, lastname) {
  console.log(`${firstname} ${lastname}`)
}
```

Here, we assigned the function expression to **printName**. Now we can use that function logic later by 
calling **printName()**.

### Anonymous functions are useful for anonymous operations

There are cases where you do not need to use a function later. You can execute the function instantly. 
In such cases, you do not need a name, so you can use a function expression instead of a declaration.

Let's see some examples.

#### Immediately Invoked Function Expressions (IIFEs)

IIFEs are functions that are immediately invoked after creation. Here's an example:

```js
(function() {
  console.log('deeecode')
})()

// deeecode
```

This is an IIFE where we create a function that executes **console.log('deeecode')**. Immediately after 
creating the function, we execute it as you see at the end (**()**). Here, we do not intend to use the 
function later, so a function expression works fine.

Using a function declaration here will not throw an error, but the name of the function will be 
inaccessible:

```js
(function print(){
  console.log('deeecode')
})()

print()

// deeecode
// ReferenceError: print is not defined
```

Using a function declaration, the IIFE is executed, but you cannot access the name of the function 
outside the parenthesis.

#### Callback Functions

When using callback functions, you can also pass anonymous functions (function expressions). For 
example, using the **forEach** method of arrays which expects a callback function, we can use an 
anonymous function.

**forEach** loops through each item in an array and executes the callback function on them. Let's see 
how we use a function expression for this:

```js
const array = [1, 2, 3]

array.forEach(function(value) {
  console.log(value)
})

// 1
// 2
// 3
```

As you see here, we passed a function expression (anonymous function) as an argument to **forEach**.

You can pass a function declaration instead, and the callback function will work. But, as we saw 
earlier, you won't be able to access the function later:

```js
const array = [1, 2, 3]

array.forEach(function print(value) {
  console.log(value)
})

// 1
// 2
// 3

// ReferenceError: print is not defined
```

As you see here, **print** is declared and used as the callback function, but you cannot access 
**print** afterward.

## Conclusion

Function declarations and function expressions are terms you would hear a lot around functions in 
JavaScript You can use function expressions to perform similar logic with function declarations, but it 
is worth noting the differences.

# WHAT IS THE "THIS" KEYWORD IN JS?

In JavaScript, the **this** keyword always refers to an object. The thing about it is that the object 
it refers to will vary depending on how and where **this** is being called.

And there's a few different ways in which you can use the **this** keyword, so let's see the most 
common cases and how it behaves in each of them.

An important comment is that **this** is not a variable – it's a keyword, so its value can't be changed 
or reassigned.

## How to Call **this** By Itself

If we call **this** by itself, meaning not within a function, object, or whatever, it will refer to the 
global window object.

If you print it like **console.log('this alone', this)**; you'll get this in your console: 
**[object Window]**. Or this if you expand it:

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-367.png "This keyword")

## How to Call **this** in an Object Method

But if we call **this** within an object method, like in the following example:

```js
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getThis : function() {
      return this;
    }
};

console.log('this in object method', person.getThis());
```

We'll see that this no longer refers to the object itself:

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-368.png "This keyword2")

And given this, we can use this to access other properties and methods from the same object:

```js
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getFullName : function() {
      return this.name + ' ' + this.lastName;
    }
};

console.log('this in object method', person.getFullName());
```

## How to Call **this** in a Function

If we call **this** within a function like in the following example:

```js
function test() {
    console.log('this in a function', this);
}

test()
```

**this** will now refer again to the general window object, and we'll get this in our console: 
**[object Window]**.

## A note about arrow functions

In arrow functions, JavaScript sets the **this** lexically. This means that the arrow function doesn't 
create its own execution context but inherits the **this** from the outer function where the arrow 
function is defined. In most cases, this means **this** will refer to the window object as well:

```js
const show = () => this

console.log('arrow function this', show())
```
![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-374.png "This keyword3")

It's important to notice this because, for example, if we try to implement an arrow function to it as 
an object method, we won't be able to access the object through the **this** keyword:

```js
const person = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: () => this.name + ' ' + this.surname
}

console.log(person.sayName());
```

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-375.png "This keyword4")

## A note about strict-mode

When using strict-mode, calling **this** within a function will return **undefined**:

```js
"use strict";

function show() {
    console.log(this);
}

show();
```

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-370.png "This keyword5")

Strict mode makes several changes to regular JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.

- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode 
code can sometimes be made to run faster than identical code that's not strict mode.

- Prohibits some syntax likely to be defined in future versions of ECMAScript.

## How to Use **this** in an Event Listener

When using this in an event listener, this will refer to the DOM element that fired the event.

```js
document.getElementById('testBtn').addEventListener('click', function() {
    console.log('this in a event', this);
})
```

In our case, we added the event listener to a button element: **<button id="testBtn">TEST</button>**

And after clicking it, we get the following in our console:

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-369.png "This keyword6")

## **this** Methods (call, apply and bind)

To complicate the subject a little more, javascript provides three native methods that can be used to 
manipulate the way the **this** keyword behaves. These methods are **call, apply and bind**. Let's see 
how they work.

### How to Use the **Call** Method

With **call** we can invoke a method passing an owner object as an argument. Said in a simpler way, we 
can call a method indicating to which object the keyword **this** will refer to.

```js
const person1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function() {
        return this.name + " " + this.surname;
    }
}

const person2 = {
    name: 'Jimena',
    surname: 'Juarez'
}

console.log(person1.sayName.call(person2));
```

Here we have two person objects. Each with its **name** and **surname** properties, and the **person1** 
object has a **sayName*+ method.

Then we call the **person1 sayName** method in the following way: **person1.sayName.call(person2)**.

By doing this, we're indicating that when the **sayName** method executes, the **this** keyword won't 
refer to the object that "owns" the method (**person1**) but to the object we passed as parameter 
(**person2**). As a consequence, we get this in our console:

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-376.png "This keyword7")

Keep in mind that if the given method accepts arguments, we can pass them as well when we invoke it 
with **call**:

```js
const person1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(city, country) {
        return this.name + " " + this.surname + ", " + city + ", " + country;
    }
}

const person2 = {
    name: 'Jimena',
    surname: 'Juarez'
}

console.log(person1.sayName.call(person2, "DF", "Mexico"));
```

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-377.png "This keyword8")

### How to Use the **Apply** Method

The **apply** method works very similarly to **call**. The only difference between them is that 
**call** accepts parameters as a list separated by colons (as the last example we saw), and **apply** 
accepts them as an array. So if we want to replicate the same example using **apply** we'd have to do 
it like this:

```js
const person1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(city, country) {
        return this.name + " " + this.surname + ", " + city + ", " + country;
    }
}

const person2 = {
    name: 'Jimena',
    surname: 'Juarez'
}

console.log(person1.sayName.apply(person2, ["DF", "Mexico"]));
```

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-378.png "This keyword9")

### How to Use the **Bind** Method

Same as **call** and **apply**, the **bind** method indicates the object to which the **this** keyword 
will refer when a given method executes.

But the difference with **bind** is that it will return a new function, without executing it. While 
with **call** and **apply** the function executed right away, using **bind** we must execute it 
separately.

```js
const person1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function() {
        return this.name + " " + this.surname
    }
}

const person2 = {
    name: 'Jimena',
    surname: 'Juarez'
}

const sayPerson2Name = person1.sayName.bind(person2)

console.log(sayPerson2Name())
```

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/image-381.png "This keyword10")
