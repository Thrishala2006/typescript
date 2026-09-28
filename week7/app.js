const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = Number(req.body.age);

    if (!name || !email || !age) {
        return res.send("All fields are required");
    }

    if (age < 18) {
        return res.send("Age must be 18 or above");
    }

    res.render("result", {
        name: name,
        email: email,
        age: age
    });
});
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});