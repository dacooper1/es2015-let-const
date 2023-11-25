

// In this exercise, you’ll refactor some ES5 code into ES2015.

// ## ****ES5 Global Constants****

var PI = 3.14;
PI = 42; // stop me from doing this!

// ## ****ES2015 Global Constants****

const PI = 3.14;

// ## **Quiz**

// - What is the difference between ***var*** and ***let***?
        // var:
        // - function scope 
        // - can be reassigned and redeclared 
        // - hoisted 
        // - property on window object 

        // let:
        // - block scope
        // - can be reassigned but not redeclared 
        // - not hoisted 
        // - not added to window object(reduces naming conflicts)

// - What is the difference between **var** and ***const***?
        // var:
            // - function scope 
            // - can be reassigned and redeclared 
            // - hoisted 
            // - property on window object 

        // const:
            // - cannot be redeclared or reassigned 
            // - block scope 
            // - not hoisted 
            // - not added to window object(reduces naming conflicts)
            // - data can still be manipulated if it is in a reference type 

// - What is the difference between **let** and **const**?
        // let:
            // - can be reassigned but not redeclared
        // const 
            // - cannot be reassigned or redeclared 

// - What is hoisting?
    // Declartions are read first (brought to the top), which allows you to call a variable before it is assigned. This only works with var.