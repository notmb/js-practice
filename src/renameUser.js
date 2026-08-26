const renameUser = (users, id, newName) => {
  const renameUsers = users.map((user) => {
    if (user.id === id) {
      return { ...user, name: newName };
    } else return user;
  });

  return renameUsers;
};

export default renameUser;
