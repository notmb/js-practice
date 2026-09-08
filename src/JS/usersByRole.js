const groupUsersByRole = (users) => {
  let usersByRole = {};
  users.forEach((user) => {
    if (usersByRole[user.role]) {
      usersByRole[user.role].push(user);
    } else {
      usersByRole[user.role] = [];
      usersByRole[user.role].push(user);
    }
  });

  return usersByRole;
};
export default groupUsersByRole;
