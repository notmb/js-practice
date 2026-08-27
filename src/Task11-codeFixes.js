const users = [
  { id: 1, name: "Anna", active: true },
  { id: 2, name: "Bob", active: false },
];

function activateUser(id, users) {
  const newUsers = users.map((user) => {
    if (user.id === id) {
      return { ...user, active: true };
    } else return user;
  });
  return newUsers;
}

console.log(activateUser(2, users));
