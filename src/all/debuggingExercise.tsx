type User = {
  id: number;
  name: string;
  age?: number;
};

// function getUserLabel(user: User) {
//   return user.name + " (" + user.age.toFixed(0) + ")";
// }
function getUserLabel1(user: User) {
  if (user.age) {
    return user.name + " (" + user.age.toFixed(0) + ")";
  }
}

// function findUser(users: User[], id: string) {
//   return users.find((user) => user.id === id);
// }
function findUser1(users: User[], id: string) {
  //  return users.find(user => user.id === id);
  return users.find((user) => user.id.toString() === id);
}

const users: User[] = [
  {
    id: 1,
    name: "Anna",
  },
];

const user = findUser1(users, "1");

// console.log(user.name);

users.forEach((user) => {
  console.log(user.name);
});
