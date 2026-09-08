export const getUserNames = (users) => {
  const names = [];
  users.forEach((user) => names.push(user.name));
  return names;
};
// export default getUserNames;

export const renameUser = (users, id, newName) => {
  const renameUsers = users.map((user) => {
    if (user.id === id) {
      return { ...user, name: newName };
    } else return user;
  });

  return renameUsers;
};

// export default renameUser;
