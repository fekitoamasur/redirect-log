const express = require("express");
const app = express();
const port = 3128;

app.get("/proton-mail-secure-redirect", (req, res) => {
    console.log(`Got request with id: ${req.query.id}`);
    res.redirect(301, "https://twitter.com/_nat_ali/status/1308893338553200643?lang=en");
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

// localhost:3128/proton-mail-secure-redirect?id=test
