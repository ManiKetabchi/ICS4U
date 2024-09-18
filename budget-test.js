const prompt = require("prompt-sync")();

let pagenumber = 0 // will be used to change pages
let expenselist = []

for (let i = 0; i < 1;) {
    if (pagenumber == 0) {
        for (let i = 0; i < 1; i++) {
            console.log("1 to add an expense")
            console.log("2 to view total expenses")
            console.log("3 to check budget")
            console.log("4 to reset budget")
            console.log("5 to exit")
        
            pagenumber = prompt("Page no:")
        }
    }
    if (pagenumber == 1) {

        const currname = prompt("expense name (type exit to go to homepage): ")

        if (currname == "exit") {
            pagenumber = 0
        } else {

        const currexp = prompt("expense price: ")

        if (isNaN(currexp)) {
            console.log("Try again")
            pagenumber = 0
        } else {
            expenselist.push([currexp, currname])
            console.log(expenselist)
        }
        }
    }
    if (pagenumber == 2) {

        let totalexpenses = 0

        for (let i = 0; i < expenselist.length; i++) {
            totalexpenses += Number(expenselist[i][0]) // convert to number
        }
        console.log("You have current expenses of $" + totalexpenses)
        const samplevar = prompt("press anything to get back to the homepage: ")
        pagenumber = 0

    }
    if (pagenumber == 3) {
        let totalexpenses = 0

        for (let i = 0; i < expenselist.length; i++) {
            totalexpenses += Number(expenselist[i][0]) // convert to number
        }

        const currbudget = prompt("budget: ")

        console.log("You have current expenses of $" + totalexpenses + " and a budget of $" + currbudget)

        if (Number(totalexpenses) > Number(currbudget)) {
            console.log("Exceeded Budget")
        }
        if (Number(totalexpenses) < Number(currbudget)) {
            console.log("Under Budget")
        }
        if (Number(totalexpenses) == Number(currbudget)) {
            console.log("Matched Budget")
        }

        const samplevar = prompt("press anything to get back to the homepage: ")
        pagenumber = 0
    }
    if (pagenumber == 4) {
        expenselist = []
    }
    if (pagenumber == 5) {
        
    }
}
