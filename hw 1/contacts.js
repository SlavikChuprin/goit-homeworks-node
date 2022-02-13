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

async function getContactById(contactId) {
  const contacts = await readContent();
  const [contact] = contacts.filter((c) => c.id === contactId);
  return contact;
}

function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  const contacts = await readContent();
  const newContact = { id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
