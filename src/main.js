import getActiveUsers from "./activeUser";
import getUserNames from "./userNames";
import findUserById from "./findUsers";
import groupUsersByRole from "./usersByRole";
import renameUser from "./renameUser";
const users = [
  {
    id: 1,
    name: "Anna",
    role: "admin",
    active: true,
  },
  {
    id: 2,
    name: "Bob",
    role: "user",
    active: false,
  },
  {
    id: 3,
    name: "Kate",
    role: "user",
    active: true,
  },
];

console.log(getActiveUsers(users));
console.log(findUserById(users, 1));
console.log(groupUsersByRole(users));
console.log(renameUser(users, 1, "newName"));
console.log(getUserNames(users));
