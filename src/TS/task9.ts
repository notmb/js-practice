function parse1(data: any) {
  return data.name.toUpperCase();
}

function parse2(data: unknown) {
  // make this safe
  if (
    typeof data === "object" &&
    data &&
    "name" in data &&
    typeof data.name === "string"
  ) {
    return data.name.toUpperCase();
  }
}
