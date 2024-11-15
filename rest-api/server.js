import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let students = [
    {id: 1, name: "John", age: 18},
    {id: 2, name: "Jane", age: 19},
    {id: 3, name: "Bob", age: 20}
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const student = students.find((student) => student.id === parseInt(req.params.id));
    res.json(student);
});

app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    }
    students.push(student);
    res.send(student);
});

app.put("/api/students/:id", (req, res) => {
    const student = students.find((student) => student.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("The student with the given ID was not found");

    student.name = req.body.name;
    student.age = req.body.age;

    res.send(student);
});

app.delete("/api/students/:id", (req, res) => {
    const student = students.find((student) => student.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("The student with the given ID was not found");

    const index = students.indexOf(student);
    students.splice(index, 1);

    res.send(student);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));