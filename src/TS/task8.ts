type User = {
  id: number;
  name: string;
  role: "admin" | "user";
  active: boolean;
};

const users: User[] = [
  {
    id: 1,
    name: "Anna",
    role: "admin",
    active: true,
  },
  {
    id: 2,
    name: "John",
    role: "user",
    active: false,
  },
  {
    id: 3,
    name: "Mika",
    role: "user",
    active: true,
  },
];

const getActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.active);
};

function getUserNames(users: User[]) {
  return users.map((user) => {
    return user.name;
  });
}

const findUserById = (users: User[], id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

function getAdmins(users: User[]): User | undefined {
  return users.find((user) => user.role === "admin");
}

const groupUsersByRole = (users: User[]) => {
  const group: { [key: string]: User[] } = {};
  users.forEach((user) => {
    group[user.role] ??= [];
    group[user.role].push(user);
  });
  return group;
};

const groupUsersByRole1 = (users: User[]) => {
  const group = users.reduce<{ [key: string]: User[] }>((acc, user) => {
    if (!acc[user.role]) {
      acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
  }, {});
  return group;
};

// взято з чатіка
const groupUsersByRole2 = (users: User[]) => {
  const group = users.reduce(
    (acc, user) => {
      acc[user.role] ??= [];
      acc[user.role].push(user);

      return acc;
    },
    {} as { [key: string]: User[] },
  );

  return group;
};
