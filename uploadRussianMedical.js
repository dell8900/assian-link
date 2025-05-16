const axios = require("axios");
const data = require("./data"); // array of college objects

axios
 .post("https://assian-link.vercel.app/api/russian-medical-colleges/bulk", data)
 .then((res) => console.log(res.data.message))
 .catch((err) => console.error("Upload failed:", err.message));
