export {};

type User = {
  id: number;
  name: string;
  email?: string;
  address?: {
    city: string;
    country: string;
  };
};

const users: User[] = [
  {
    id: 1,
    name: "Anna",
    email: "anna@gmail.com",
    address: {
      city: "Kyiv",
      country: "Ukraine",
    },
  },
  {
    id: 2,
    name: "John",
  },
];

function findUser(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

const user1 = findUser(5);
const userGmail = user1?.email ?? "noGmail";
const userName = user1?.name;

function earlyReturn(id: number): void {
  const user = findUser(id);
  if (!user) {
    console.log("No user");
    return;
  }

  console.log(user.name);
  console.log(user.email ?? "No email");
}

earlyReturn(2);
earlyReturn(5);

// undefined ?? "fallback" -->   "fallback"
// null ?? "fallback"      -->   "fallback"

// 0 ?? "fallback"         -->   0
// "" ?? "fallback"        -->   ""
// false ?? "fallback"     -->   false

//---------------------------

// undefined || "fallback" -->   "fallback"
// null || "fallback"      -->   "fallback"

// 0 || "fallback"         -->   "fallback"
// "" || "fallback"        -->   "fallback"
// false || "fallback"     -->   "fallback"
