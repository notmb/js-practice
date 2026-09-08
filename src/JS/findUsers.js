const findUserById = (users, id) => {
  const user = users.find((user) => {
    if (user.id === id) {
      return true;
    }
  });
  return user;
};

export default findUserById;
