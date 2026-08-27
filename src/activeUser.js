const getActiveUsers = (users) => {
  const activeUsers = users.filter((user) => {
    if (user.active === true) {
      return true;
    }
  });
  return activeUsers;
};
export default getActiveUsers;
