const contactService = require("../models/contacts/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getListContacts = async (req, res) => {
  const result = await contactService.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactService.getContactById(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
  }

  res.json(result);
};

const addContact = async (req, res, next) => {
  const result = await contactService.addContact(req.body);

  res.status(201).json(result);
};

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactService.removeContact(contactId);
  if (!result) {
    throw HttpError(404, `Cintact with id=${contactId} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

const updateContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactService.updateContactById(contactId, req.body);
  if (!result) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
  }

  res.json(result);
};

module.exports = {
  getListContacts: ctrlWrapper(getListContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContactById: ctrlWrapper(updateContactById),
};
