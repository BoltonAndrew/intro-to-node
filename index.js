// let num1 = 12;
// console.log(num1);
// Node Runtime Environment allows for server side JS
// Chromium V8 Engine + Node API === Node Runtime Env
// Whereas in browser:
// Chromium V8 Engine + Browser + WEB API + HTML file

const http = require("http");
const url = require("url");
const { readFile } = require("fs/promises");
const path = require("path");

http
  .createServer(async function (req, res) {
    res.writeHead(416, { "Content-Type": "text/html" });
    const html = await readFile(path.join(__dirname, "./index.html"));
    res.write(html);
    // let urlString = url.parse(req.url, true);
    // let stringyUrl = JSON.stringify(urlString);
    // console.log(stringyUrl);
    // if (req.url === "/summer") {
    //   console.log(req.url);
    //   res.write("<h1>It's warm!</h1>");
    // } else if (req.url === "/winter") {
    //   console.log(req.url);
    //   res.write("<h1>It's cold!</h1>");
    // } else {
    //   console.log(req.url);
    //   res.write("<h1>It's mild</h1>");
    // }
    res.end();
  })
  .listen(5001);

//   Type into the browser bar
/* fetch("http://localhost:5001", {
    method: "GET"
})


<input type="search" onSubmit=fetch />
*/
