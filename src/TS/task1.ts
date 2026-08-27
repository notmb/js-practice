export {};
const name = "Anna";
const age: number = 24;
const tags: string[] = ["react", "typescript"];

//let something = 24;
// something = "mama"; ERROR

function double(value: number) {
  return value * 2;
}

// 4) When should I explicitly write a type, and when should I let TypeScript infer it?
// питання фігня ((( завжди писати типи!!!

// primitive type: string, number, boolen, null, undefined, symbol, bidint
// object types: object, array, function
// special: any, unknown, void, never

// union |
// intersection &
// literal  -- role = "admin";
