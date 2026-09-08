export {};
// Learn:

// parameter types
// return types
// optional parameters
// default parameters
// callback types

const users: User[] = [
  {
    id: 1,
    name: "Anna",
    active: true,
  },
  {
    id: 2,
    name: "John",
    active: false,
  },
  {
    id: 3,
    name: "Mika",
    active: false,
  },
];

type User = {
  id: number;
  name: string;
  active: boolean;
};

function calculateTotal(
  price: number,
  quantity: number,
  discount?: number,
): number {
  if (!discount) {
    return Number((price * quantity).toFixed(2));
  } else {
    return Number((price * quantity).toFixed(2)) * (1 - discount / 100);
  }
}

// Then type:

function filterUsers(
  users: User[],
  predicate: (user: User) => boolean,
): User[] {
  return users.filter(predicate);
}

// filterUsers(users, user => user.active);
