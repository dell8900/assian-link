const axios = require("axios");
const data = require("./data"); // array of CMS or more

axios
 .post("http://localhost:3008/api/nepal-medical-colleges/bulk", data)
 .then((res) => console.log(res.data.message))
 .catch((err) => console.error("Upload failed:", err.message));
