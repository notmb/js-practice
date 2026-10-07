export {};

type User = {
  id: number;
  name: string;
  active: boolean;
};
type UserCardProps = {
  user: User;
  selected: boolean;
  onSelect: (id: number) => void;
  subtitle?: string;
};
const UserCard = (prop: UserCardProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  //---------
  // 1. Клік
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  // 2. Відправка форми
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  // 3. Клавіатура
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
  };

  ///----------

  return <input onChange={handleChange} />;
};
