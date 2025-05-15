const College = require("../models/College");

async function convertAndInsert(object) {
 try {
  // Step 1: Convert to JSON
  const jsonString = JSON.stringify(object, null, 2);
  const parsedObject = JSON.parse(jsonString); // ✅ Again parse to ensure clean format

  // Step 2: Save to DB
  const newCollege = new College(parsedObject);
  const savedCollege = await newCollege.save();

  return { success: true, college: savedCollege };
 } catch (error) {
  console.error("Error in convertAndInsert:", error);
  return { success: false, error: "Failed to insert college" };
 }
}

module.exports = convertAndInsert;
