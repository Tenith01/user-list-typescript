import React, {useState} from 'react';
import './App.css';

function App() {
    interface UserInt {
        name: string,
        age: string,
        job: string
    }

    // const [usersState, setUsersState] = usersState<{ currentUser: UserInt }>({
    const [usersState, setUsersState] = useState<{ currentUser: UserInt }>({
        currentUser: {
            name: "",
            job: "",
            age: ""
        }
    })

    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsersState({
            currentUser: {
                ...usersState.currentUser, [e.target.name]: e.target.value
            }
        })
    }
    const submitForm = (): void => {
        console.log("submit")
    }
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
                    name={"Job"}
                    value={usersState.currentUser.job}
                    onChange={onchangeHandler}
                />

                <button type={"submit"}>ADD user</button>
            </form>
        </div>

    );
}

export default App;
