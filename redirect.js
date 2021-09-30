const express = require("express");
const sh = require("shelljs");
const fs = require('fs');
const geoip = require('geoip-lite');
const app = express();
const port = 3128;

app.get("/proton-mail-secure-redirect", (req, res) => {
  // Get IP
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

  // Log entry 
  const entry = `# At time ${Date.now()} [${new Date().toString()}] got request with ID «${req.query.id}» from IP:«${ip}»\n`;
  
  // Console log
  console.log(entry);

  // Geoloc 
  let geo = geoip.lookup(ip);
  
  // Write to the log file
  log(entry, { flag: 'a+' });

    // Match check 
  if (req.query.id == "EefangieGodosiegaenah5eunah4chi6") {
    log("    *** This is a match with the watched-for ID !!! The fish bit the hook, amazing... ***\n");
    log_fucker();
  }

  // Log the full request 
  log(`    headers: ${JSON.stringify(req.headers)}\n`);
  log(`    query: ${JSON.stringify(req.query)}\n`);
  log(`    ips: ${JSON.stringify([req.ip, req.ips])}\n`);
  log(`    geoloc: ${JSON.stringify(geo)}\n\n`);


  // Auto-commit 
  sh.exec(`git commit -a -m 'auto-commit of log.txt'`);
  sh.exec(`git push`);

  // Actual redirect
  res.redirect(301, "https://twitter.com/_nat_ali/status/1308893338553200643?lang=en");

});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

function log(text) {
    fs.writeFileSync('log.txt', text, { flag: 'a+' });
}

function log_fucker() {
    log("                                                                  \n");
    log("   ____       _     _   _             __            _             \n");
    log("  / ___| ___ | |_  | |_| |__   ___   / _|_   _  ___| | _____ _ __ \n");
    log(" | |  _ / _ \| __| | __| '_ \ / _ \ | |_| | | |/ __| |/ / _ \ '__|\n");
    log(" | |_| | (_) | |_  | |_| | | |  __/ |  _| |_| | (__|   <  __/ |   \n");
    log("  \____|\___/ \__|  \__|_| |_|\___| |_|  \__,_|\___|_|\_\___|_|   \n");
    log("                                                                  \n");
}