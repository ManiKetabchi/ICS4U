const prompt = require("prompt-sync")();

let pagenumber = 0; // will be used to change pages
let expensecost = [];
let expensename = [];

for (let i = 0; i < 1;) {
    if (pagenumber == 0) {
        for (let i = 0; i < 1; i++) {
            console.log("1 to add an expense")
            console.log("2 to view total expenses")
        
            pagenumber = prompt("Page no:")
        }
    }
    if (pagenumber == 1) {
        const currexp = prompt("expense (type exit to exit): ")
        push(currexp) 
    }
}

prompt("What is your budget?:");


