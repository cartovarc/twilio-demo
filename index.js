const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", function (req, res) {
  let data = req.body.Body;
  let textResponse = "Tu mensaje es '" + data + "' y tiene " + data.length + " caracteres";
  res.setHeader("content-type", "text/plain");
  res.send(textResponse);
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
