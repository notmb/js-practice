const renameUser = (users, id, newName) => {
  const renameUsers = users.map((user) => {
    if (user.id === id) {
      user.name = newName;
    }
  });
  return renameUsers;
};

export default renameUser;
