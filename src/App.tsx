import React, {useState} from 'react';
import './App.css';

function App() {
    interface UserInt {
        name: string,
        age: string,
        job: string
    }

    interface AllUsersInt {
        currentUser: UserInt;
        allUsers: Array<UserInt>;
    }

    // const [usersState, setUsersState] = usersState<{ currentUser: UserInt }>({
    const [usersState, setUsersState] = useState<AllUsersInt>({
        currentUser: {
            name: "",
            age: "",
            job: "",
        },
        allUsers: []
    })

    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsersState({
            ...usersState,
            currentUser: {
                ...usersState.currentUser,
                [e.target.name]: e.target.value
            }
        })
    }
    const submitForm = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        setUsersState({
            currentUser: {
                name: "",
                age: "",
                job: ""
            },
            allUsers: [
                ...usersState.allUsers,
                usersState.currentUser
            ]
        })
    }

    const deleteHandler = () => {

    }

    const allUsers = usersState.allUsers.map((user, i) =>
        <div key={i}>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>{user.job}</h2>
            <button onClick={deleteHandler}>Delete User</button>
        </div>
    );
    console.log(usersState.currentUser);

    return (
        <div className={"container"}>
            <h1>React with Typescript</h1>
            <form onSubmit={submitForm}>
                <label htmlFor={"userName"}> Name : </label>
                <input
                    id={"userName"}
                    type={"text"}
                    name={"name"}
                    value={usersState.currentUser.name}
                    onChange={onchangeHandler}
                />

                <label htmlFor={"userAge"}> Age : </label>
                <input
                    id={"userAge"}
                    type={"number"}
                    name={"age"}
                    value={usersState.currentUser.age}
                    onChange={onchangeHandler}
                />

                <label htmlFor={"userJob"}> Job : </label>
                <input
                    id={"userJob"}
                    type={"text"}
                    name={"job"}
                    value={usersState.currentUser.job}
                    onChange={onchangeHandler}
                />

                <button type={"submit"}>ADD user</button>
            </form>
            {allUsers}
        </div>

    );
}

export default App;
