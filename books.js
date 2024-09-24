const prompt = require("prompt-sync")();

let lib = [{title: "book1", author: "author1"}, {title: "book2", author: "author2"}]
let pageno = 0

function addBook() {
    let title = prompt("Title: ")
    let author = prompt("Author: ")
    lib.push({title, author})
}

function viewBooks() {
    for (let i = 0; i < lib.length; i++) {
        console.log(lib[i].title, lib[i].author)
    }
}

for (let i = 0; i < 1;) {
    if (pagenumber == 0) {
        console.log("1 to add a book")
        console.log("2 to view books")
        console.log("3 to exit")
        pageno = prompt("Page no:")
    }
    if (pagenumber == 1) {
        addBook()
        pageno = 0;
    }
    if (pagenumber == 2) {
        viewBooks()
        pageno = 0;
    }
    if (pagenumber == 3) {
    }
}
