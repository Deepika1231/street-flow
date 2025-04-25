const router = require('express').Router();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = twilio(accountSid, authToken);

router.post('/send', async (req, res) => {
  const { level, location, to } = req.body;

  const message = `🚨 Water Level Alert: ${level}m at ${location} — Stay safe!`;
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE,
      to: to
    });
    res.json({ status: "SMS sent" });
  } catch (err) {
    res.status(500).json({ error: "SMS failed", details: err.message });
  }
});

module.exports = router;
