const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.use("/parse", (req, res) => {
    let url = req.query.link;

    if (!url) {
        res.status(400).json({ err: "invalid url" });
    }
    else {
        let parsedLink = url.substring(0, url.indexOf("?"));
        res.json({ result: parsedLink });
    }
});

app.listen(port, () => console.log("Listening..."));