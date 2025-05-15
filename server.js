const express = require("express");
const app = express();
const cors = require("cors"); // Import the cors package
const port = 3008;
const mongoose = require("mongoose");
const adduniversity = require("./dataroutes/universities");
const medicalfetch = require("./dataroutes/medicalfetch");
const University = require("./models/University");
const addEngineering = require("./dataroutes/add/Engineering");
const addManagement = require("./dataroutes/add/Management");
const addLaw = require("./dataroutes/add/Law");
const addDesign = require("./dataroutes/add/Design");
const fetchEngineering = require("./dataroutes/fetch/Engineering");
const fetchManagement = require("./dataroutes/fetch/Management");
const fetchLaw = require("./dataroutes/fetch/Law");
const fetchDesign = require("./dataroutes/fetch/Design");
const fetchEngineeringcollege = require("./dataroutes/fetchcollege/Engineering");
const fetchManagementcollege = require("./dataroutes/fetchcollege/Management");
const fetchLawcollege = require("./dataroutes/fetchcollege/Law");
const fetchDesigncollege = require("./dataroutes/fetchcollege/Design");
const registerUser = require("./dataroutes/add/User");
const blog = require("./dataroutes/fetch/Blog");
const patner = require("./dataroutes/add/Patner");
const career = require("./dataroutes/add/Career");
const generalAddUniversities = require("./dataroutes/add/GeneralAddCollege");
const collegeRoutes = require("./routes/collegeRoutes");
const enggCollegeRoutes = require("./routes/enggCollegeRoutes");
const deemedMedicalRoutes = require("./routes/deemedMedicalRoutes");
const nepalMedicalRoutes = require("./routes/nepalMedicalRoutes");
const russianMedicalRoutes = require("./routes/russianMedicalRoutes");
const collegesRoutes = require("./routes/collegesRoutes");
const mbbsInquiryRoute = require("./routes/mbbsInquiryRoute");
const pgInquiryRoutes = require("./routes/pgInquiryRoutes");

mongoose
 .connect(
  "mongodb+srv://pushpendra:4321@cluster0.edbmizv.mongodb.net/data?retryWrites=true&w=majority"
 )
 .then(() => {
  console.log("Connected to database MongoDB");
 })
 .catch((error) => {
  console.error("MongoDB connection error:", error);
 });
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());
app.use(express.json());

app.use("/api", adduniversity);
app.use("/api", medicalfetch);
app.use("/api", addEngineering);
app.use("/api", addManagement);
app.use("/api", addLaw);
app.use("/api", addDesign);
app.use("/api", fetchEngineering);
app.use("/api", fetchManagement);
app.use("/api", fetchLaw);
app.use("/api", fetchDesign);
app.use("/api", registerUser);
app.use("/api", fetchEngineeringcollege);
app.use("/api", fetchManagementcollege);
app.use("/api", fetchLawcollege);
app.use("/api", fetchDesigncollege);
app.use("/api", blog);
app.use("/api", patner);
app.use("/api", career);
app.use("/api", generalAddUniversities);
app.use("/api", collegeRoutes);
app.use("/api", enggCollegeRoutes);
app.use("/api", deemedMedicalRoutes);
app.use("/api", nepalMedicalRoutes);
app.use("/api", russianMedicalRoutes);
app.use("/api", collegesRoutes);
app.use("/api/mbbs-inquiry", mbbsInquiryRoute);
app.use("/api/pg-inquiries", pgInquiryRoutes);

app.get("/api/medical/:collegename", async (req, res) => {
 try {
  const collegename = req.params.collegename;
  const collegeData = await University.findOne({ collegename });
  if (!collegeData) {
   return res.status(404).json({ message: "College not found" });
  }
  res.json(collegeData);
 } catch (error) {
  console.error("Error fetching college data:", error);
  res.status(500).json({ message: "Internal server error" });
 }
});
app.get("/", (req, res) => {
 res.send("Hello from the server");
});
app.listen(port, () => {
 console.log("Server is running on port", port);
});
