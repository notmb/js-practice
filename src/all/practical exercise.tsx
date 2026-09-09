import { useEffect, useState } from "react";

export {};
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  active: boolean;
};

type UsersState =
  | { status: "loading" }
  | { status: "success"; users: User[] }
  | { status: "error"; message: string };

const Users = () => {
  const [state, setState] = useState<UsersState>({ status: "loading" });
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Anna",
      email: "gmail",
      role: "admin",
      active: true,
    },
    {
      id: 2,
      name: "John",
      email: "gmail",
      role: "admin",
      active: false,
    },
    {
      id: 3,
      name: "Mika",
      email: "gmail",
      role: "admin",
      active: false,
    },
  ]);

  const [count, setCount] = useState(0);

  const findUser = (users: User[], id: number) => {
    return users.find((user) => user.id === id);
  };

  const getActiveUsers = (users: User[]) => {
    return users.filter((user) => user.active);
  };

  const searchUsers = (users: User[], query: (user: User) => boolean) => {
    return users.filter(query);
  };

  const updateUser = (user: User, changes: Partial<User>) => {
    return { ...user, ...changes };
  };

  const groupUsersByRole = (users: User[]) => {
    return users.reduce<{ [key: string]: User[] }>((acc, user) => {
      acc[user.name] ??= [];
      acc[user.name].push(user);

      return acc;
    }, {});
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (count > 2) {
      setState({ status: "success", users: users });
    }
    if (count > 5) {
      setState({ status: "error", message: "error" });
    }
  }, [count]);

  return (
    <div>
      {state.status === "loading" && <p>LOADING</p>}
      {state.status === "success" && <p>USERS HAVE LOADED</p>}
      {state.status === "error" && <p>SOMETHING WRONG</p>}
      <h1>Users</h1>
    </div>
  );
};
export default Users;
