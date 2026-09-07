const express = require("express");
const app = express();
const port=5000;
function checkTicket(req, res, next) {
    const hasTicket = true;

    if (hasTicket) {
        next();
    } else {
        res.send("Sorry, you need a ticket!");
    }
}

app.use(checkTicket);

app.get("/movie", (req, res) => {
    res.send("Enjoy the movie!");
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
