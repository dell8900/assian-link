// utils/convertToJSON.js

function convertToJSON(object) {
 try {
  const jsonString = JSON.stringify(object, null, 2); // pretty print with 2 spaces
  return jsonString;
 } catch (error) {
  console.error("Error converting object to JSON:", error);
  return null;
 }
}

module.exports = convertToJSON;
