class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
        isAvailable = true
    }
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false
        }
        if (!this.isAvailable) {
            console.log("error")
        }
    }
    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true
        }
        if (this.isAvailable) {
            console.log("error")
        }
    }
}
class Library {


}

for (let i = 0; i < 1;) {
    if (pagenumber == 0) {
        for (let i = 0; i < 1; i++) {
            console.log("1 to add book")
            console.log("2 to list books")
            console.log("3 to borrow a book")
            console.log("4 to return a book")
            console.log("5 to remove a book")
            console.log("6 to exit")

            pagenumber = prompt("Page no:")
        }
    }
    if (pagenumber == 1) {
        let currtitle = prompt("book title:")
        let currauthor = prompt("book author:")
        let curryear = prompt("book year")
        
        let book = new Book(currtitle, currauthor, curryear)
        console.log("made book")
        pagenumber = 0
    }
}
