const getActiveUsers = (users) => {
  const activeUsers = users.filter((user) => {
    if (user.activ === true) {
      return true;
    }
  });
  return activeUsers;
};
export default getActiveUsers;
