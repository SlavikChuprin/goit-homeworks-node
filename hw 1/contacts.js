const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const readContent = async () => {
  const content = await fs.readFile(
    path.join(__dirname, "contacts.json"),
    "utf8"
  );
  const result = JSON.parse(content);
  return result;
};

async function listContacts() {
  return await readContent();
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts, getContactById, removeContact, addContact };
