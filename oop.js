function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

getSummary = function() {
    return `${this.title} by ${this.author}`;
}

let book1 = new Book("cheeseburger", "Cheese", "2000");


