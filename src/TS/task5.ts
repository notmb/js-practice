export {};

//-----------

function format(value: string | number) {
  // string -> uppercase
  // number -> fixed to 2 decimals

  if (typeof value === "string") {
    const newValue = value.toUpperCase();
  }
  if (typeof value === "number") {
    const newValue = Number(value.toFixed(2));
  }
}

//-----------

type User = {
  name: string;
  age: number;
};
type ApiResult =
  | { status: "success"; data: User[] }
  | { status: "error"; message: string };

function renderResult(result: ApiResult) {
  // safely access data/message
  if (result.status === "success") {
    console.log(result.data);
  } else console.log(result.message);
}

// --------

function renderResult2(result: ApiResult) {
  // safely access data/message
  if ("data" in result) {
    console.log(result.data);
  } else console.log(result.message);
}

// How does TypeScript know which member of a union I'm dealing with?
//  нічо не знає, дізнається після перевірки котру напише спеціаліст)
