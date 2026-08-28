type Status = "idle" | "loading" | "success" | "error";

function statusLabel(status: Status): string {
  return status;
}

//statusLabel("finished"); -> помилка "finished" не належмть Status;
statusLabel("loading");

type ID = string | number;

function formatId(id: ID): string {
  //return id; не працює потрібна перевірка на тип
  if (typeof id === "string") {
    return id;
  } else return "beeee";
}
