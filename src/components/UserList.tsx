import {  useState } from "react";
import UserComponent from "./UserComponent";
import { useForm, type SubmitHandler } from 'react-hook-form'; 

const mockData: User[] = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
]


export type User = {
    username: string;
    email: string;
};


export default function UserList() {

    const [users, setUsers] = useState<User[]>(mockData);
    const {register, handleSubmit, reset} = useForm<User>();

    const onSubmit: SubmitHandler<User> = (data) => {
        if(data.username === "" || data.email === "" )
            return;

        setUsers([...users, data]);
        reset();
    };

  return (
    <section className="user-list">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username:</label>
            <input {...register("username")} id="username-input" placeholder="username"/>
            <label htmlFor="email">Email:</label>
            <input {...register("email")} id="email-input" type="email" placeholder="email"/>
            <button>Add</button>
        </form>

        <ul>
            {users.map((user, index) => (
                <UserComponent key={index} user={user}/>
            ))}
        </ul>
    </section>
  );
}