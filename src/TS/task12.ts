type User = {
  id: number;
  name: string;
  active: boolean;
};
function isUser(value: unknown): value is User {
  if (typeof value === "object" && value != null) {
    return Object.keys(value).every((key) =>
      ["id", "name", "active"].includes(key),
    );
  }
  return false;
}

// Discuss:

// const data = await response.json() as User[];
// Why might this compile while still being unsafe?

//тому що воно нічо не перевіряє а просто нам довіряє)) я так думаю)
