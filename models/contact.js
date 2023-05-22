const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Contact = model("contact", contactSchema);

module.exports = Contact;
