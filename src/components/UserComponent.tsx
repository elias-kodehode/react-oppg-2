import type { User } from "./UserList";

export default function UserComponent({user}:{user:User}) {
  return (
    <>
    <li>{user.username} - {user.email}</li>
    </>
  );
}