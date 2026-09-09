export {};
function first(items: any[]) {
  return items[0];
}
//функція втрачає інформацію про конкретний тип елементів масиву,
// а через це — і про тип значення, яке повертає.

function first1<T>(items: T[]): T | undefined {
  return items[0];
}

type User = {
  id: number;
  name: string;
  active: boolean;
};

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

console.log(first1([1, 2, 3]));
console.log(first1(["a", "b"]));
console.log(first1<User>(users));

// Use:

// ApiResponse<User>
// ApiResponse<User[]>

type ApiResponse<T> = {
  data: T;
  timestamp: number;
};

const user: User = {
  id: 1,
  name: "Anna",
  active: true,
};
const apiResponse = {
  data: user,
  timestamp: 19071994,
};
function first2<T>(elem: T): T | undefined {
  return elem;
}
console.log(first2<ApiResponse<User>>(apiResponse));
//--------

const apiResponse1 = {
  data: users,
  timestamp: 19071994,
};

console.log(first2<ApiResponse<User[]>>(apiResponse1));

//навіть не уявляю шо тут ти зможеш зрозуміти
