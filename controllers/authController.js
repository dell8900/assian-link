const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AdminUser = require("../models/AdminUser");

exports.register = async (req, res) => {
 try {
  const { name, email, mobile, password } = req.body;
  const userExists = await AdminUser.findOne({ $or: [{ email }, { mobile }] });
  if (userExists)
   return res.status(400).json({ message: "Admin already exists." });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await AdminUser.create({
   name,
   email,
   mobile,
   password: hashedPassword,
   isVerified: false, // You can manually verify from DB or admin panel
  });

  res.status(201).json({ message: "Admin registered. Awaiting verification." });
 } catch (error) {
  res.status(500).json({ message: "Registration failed", error });
 }
};

exports.login = async (req, res) => {
 try {
  const { mobile, password } = req.body;

  const user = await AdminUser.findOne({ mobile });
  if (!user) return res.status(400).json({ message: "Invalid credentials." });

  if (!user.isVerified)
   return res
    .status(403)
    .json({ message: "Admin not verified. Access denied." });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials." });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
   expiresIn: "7d",
  });

  res.status(200).json({
   message: "Login successful",
   token,
   admin: {
    id: user._id,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
   },
  });
 } catch (error) {
  res.status(500).json({ message: "Login failed", error });
 }
};
