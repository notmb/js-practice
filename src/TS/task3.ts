export {};
type User1 = {
  name: string;
  age: number;
};

interface User2 {
  name: string;
  age: number;
}
interface User3 extends User2 {
  gmail: string;
}

type User4 = {
  gmail: string;
};

type User5 = User1 & User4;

const user: User1 = {
  name: "Ivan",
  age: 18,
};

const user2: User2 = {
  name: "Olha",
  age: 16,
};

const user3: User3 = {
  name: "MrCat",
  age: 3,
  gmail: "cat@gmail.com",
};

const user5: User5 = {
  name: "MrDog",
  age: 5,
  gmail: "dog@gmail.com",
};

//Interface орієнтується на об'єкти, має extends (розширення)
// interface Employee extends Person {salary: number}
// interface можна оголосити повторно,

// type є універсальнішим, можна використовувати intersection & (об'єднання)
// Може створювати union (A | B) та intersection (A & B)
