const { Command } = require("commander");
const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require("./contacts");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const conatctById = await getContactById(id);
      if (conatctById) {
        console.log(conatctById);
        return;
      }
      console.log("Not found");
      break;

    case "add":
      const contact = await addContact(name, email, phone);
      console.log(contact);
      break;

    case "remove":
      const newContactsArr = await removeContact(id);
      console.table(newContactsArr);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
