const getUserNames = (users) => {
  const names = [];
  users.forEach((item) => names.push(item.names));
  return names;
};
export default getUserNames;
