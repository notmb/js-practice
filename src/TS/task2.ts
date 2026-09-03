export {};
type User = {
  readonly id: string;
  name: string;
  email?: string;
  active: boolean;
  address: { city: string; country: string };
};

const user: User = {
  id: "mbme",
  name: "Ivan",
  email: "mbme@gmail.com",
  active: false,
  address: { city: "Lviv", country: "Ukraine" },
};

//'user.id = "beee" -> id не можна змінювати

function displayUser(user: User): string {
  return `${user.name}, ${user.active}`;
}
function displayUser1(user: User): string {
  //return user.active; помилка бо маємо повертати рядок, user.active - не рядок
  return "beee";
}
function displayUser2(user: User): string {
  //return user.email;  помилка бо email є необов'язковим
  return "beee";
}

console.log(displayUser(user));
console.log(displayUser1(user));
console.log(displayUser2(user));
