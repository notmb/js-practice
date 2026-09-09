export {};

type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

type UserUpdate = Partial<User>;
type UserSummary = Pick<User, "id" | "name">;
type NewUser = Omit<User, "id">;
type UsersById = Record<number, User>;
