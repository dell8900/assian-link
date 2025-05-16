const nodemailer = require("nodemailer");
const BtechInquiry = require("../models/BtechInquiry");

// GoDaddy SMTP transporter
const transporter = nodemailer.createTransport({
 host: "smtpout.secureserver.net",
 port: 465,
 secure: true,
 auth: {
  user: "Support@admissionpossibility.com",
  pass: "Trip@2405",
 },
});

exports.createBtechInquiry = async (req, res) => {
 try {
  const bodySize = JSON.stringify(req.body).length; // Calculate body size in bytes
  const maxSize = 1 * 1024 * 1024; // 1MB limit (you can change to whatever you want)

  if (bodySize > maxSize) {
   return res
    .status(413)
    .json({ success: false, message: "Request payload too large" });
  }

  const newInquiry = new BtechInquiry(req.body);
  const saved = await newInquiry.save();

  const mailOptions = {
   from: '"Admission Possibility" <Support@admissionpossibility.com>',
   to: "Support@admissionpossibility.com",
   subject: "New B.Tech Inquiry Received",
   html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${saved.name || "N/A"}</p>
        <p><strong>Email:</strong> ${saved.email || "N/A"}</p>
        <p><strong>Mobile:</strong> ${saved.mobile || "N/A"}</p>
        <p><strong>State:</strong> ${saved.state || "N/A"}</p>
        <p><strong>Interested Course:</strong> ${saved.course || "N/A"}</p>
        <p><strong>Budget:</strong> ${saved.budget || "N/A"}</p>
        <p><strong>City:</strong> ${saved.city || "N/A"}</p>
        <p><strong>Message:</strong> ${saved.message || "N/A"}</p>
        <br/>
        <p>Regards,<br>Admission Possibility</p>
      `,
  };

  await transporter.sendMail(mailOptions);
  const info = await transporter.sendMail(mailOptions);

  // Log email success details
  console.log("Email sent successfully!");
  console.log("Message ID:", info.messageId);
  console.log(
   "Preview URL (for test accounts):",
   nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : "N/A"
  );

  res.status(201).json({ success: true, data: saved });
 } catch (error) {
  console.error("Error creating inquiry or sending email:", error);
  res.status(500).json({ success: false, message: "Server Error", error });
 }
};
exports.getAllBtechInquiries = async (req, res) => {
 try {
  const inquiries = await BtechInquiry.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: inquiries });
 } catch (error) {
  console.error(error);
  res.status(500).json({ success: false, message: "Server Error", error });
 }
};
