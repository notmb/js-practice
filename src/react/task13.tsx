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
const UserCard = (prop: UserCardProps) => {};
