const AdminUser = require("../models/adminUser");

exports.getAllAdmins = async (req, res) => {
 try {
  const allAdmins = await AdminUser.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: allAdmins });
 } catch (error) {
  res
   .status(500)
   .json({ success: false, message: "Failed to fetch admins", error });
 }
};

// Verify admin by ID
exports.verifyAdmin = async (req, res) => {
 try {
  const { id } = req.params;

  const updatedAdmin = await AdminUser.findByIdAndUpdate(
   id,
   { isVerified: true },
   { new: true }
  );

  if (!updatedAdmin) {
   return res.status(404).json({ success: false, message: "Admin not found" });
  }

  res.status(200).json({
   success: true,
   message: "Admin verified successfully",
   data: updatedAdmin,
  });
 } catch (error) {
  res
   .status(500)
   .json({ success: false, message: "Verification failed", error });
 }
};
