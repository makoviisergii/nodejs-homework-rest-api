const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getListContacts);

// router.get("/:contactId", ctrl.getContactById);

// router.post("/", validateBody(schemas.contactAddSchema), ctrl.addContact);

// router.delete("/:contactId", ctrl.removeContact);

// router.put(
//   "/:contactId",
//   validateBody(schemas.contactAddSchema),
//   ctrl.updateContactById
// );

module.exports = router;
