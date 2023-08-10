const fs = require("fs");
const userstr = fs.readFileSync("./data.json", "utf8");
const users = JSON.parse(userstr);
const { program } = require("commander");

let i = users.length + 1;
const addtodo = ({ title, status }) => {
  const User = {
    id: i,
    title: title,
    status: status,
  };
  users.push(User);
  fs.writeFileSync("./data.json", JSON.stringify(users, null, 4));
  i++;
};

const edittodo = ({ id, title, status }) => {
  const editUser = users.map((user) =>
    +id === user.id
      ? {
          ...user,
          title: title || user.title,
          status: status || user.status,
        }
      : user
  );
  fs.writeFileSync("./data.json", JSON.stringify(editUser, null, 4));
};

const deletetodo = ({ id }) => {
  const editUser = users.filter((user) => +id !== user.id);
  fs.writeFileSync("./data.json", JSON.stringify(editUser, null, 4));
};
console.log("*      WELCOME TO TODOLIST APP            *");
console.log("*      add -t title -s status             *");
console.log("*      edit -i id -t newtitle -s newstatus*");
console.log("*      delete -i id                       *");
console.log("\n");
program.name("Node js").description("Cli for to do list").version("1.0.0");

program
  .command("add")
  .option("-t , --title <string>", "title")
  .option("-s , --status <string>", "status")
  .action(addtodo);

program
  .command("edit")
  .option("-i , --id <number>", "user id")
  .option("-t , --title <string>", "title")
  .option("-s , --status <string>", "status")
  .action(edittodo);

program
  .command("delete")
  .option("-i , --id <number>", "user id")
  .action(deletetodo);

program.parse(process.argv);
